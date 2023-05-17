package com.ttpfx.model;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ttpfx.vo.chat.ChatMessage;
import com.ttpfx.vo.chat.ChatRequestParameter;
import com.ttpfx.vo.chat.ChatResponseParameter;
import com.ttpfx.vo.chat.Choice;
import lombok.extern.slf4j.Slf4j;
import org.apache.hc.client5.http.async.methods.AbstractCharResponseConsumer;
import org.apache.hc.client5.http.impl.async.CloseableHttpAsyncClient;
import org.apache.hc.client5.http.impl.async.HttpAsyncClients;
import org.apache.hc.client5.http.impl.routing.DefaultProxyRoutePlanner;
import org.apache.hc.core5.concurrent.FutureCallback;
import org.apache.hc.core5.http.*;
import org.apache.hc.core5.http.nio.support.AsyncRequestBuilder;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.websocket.Session;
import java.io.IOException;
import java.nio.CharBuffer;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.CountDownLatch;
import java.util.function.Consumer;

/**
 * @author ttpfx
 * @date 2023/3/28
 */
@Component
@Slf4j
public class ChatModel {

    @Value("${gpt.model.key}")
    private String API_KEY;

    @Value("${gpt.model.url}")
    private String URL;

    @Value("${gpt.model.name}")
    private String MODEL_NAME;
    private final Charset charset = StandardCharsets.UTF_8;



    @Resource
    private ObjectMapper objectMapper;

    /**
     * 该方法会异步请求chatGpt的接口，返回答案
     *
     * @param resConsumer                 函数式接口，处理每次返回的结果
     * @param chatGptRequestParameter 请求参数
     * @param question                问题
     * @return 返回chatGpt给出的答案
     */
    public String getAnswer(Consumer<String> resConsumer,ChatRequestParameter chatGptRequestParameter, String question) {
        StringBuilder sb = new StringBuilder();
        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
            // 请求URL
            HttpPost httpPost = new HttpPost(URL);

            // 设置请求头
            httpPost.setHeader("Content-Type", "application/json");
            httpPost.setHeader("Authorization", "Bearer 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");
// 设置请求参数
            chatGptRequestParameter.addMessages(new ChatMessage("user", question));
            chatGptRequestParameter.setModel(MODEL_NAME);

            // 请求的参数转换为字符串
            String valueAsString = null;
            try {
                valueAsString = objectMapper.writeValueAsString(chatGptRequestParameter);
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }

            // 请求体数据
            StringEntity requestEntity = new StringEntity(valueAsString,charset);
            requestEntity.setContentType("application/json");
            httpPost.setEntity(requestEntity);
            // 发送请求并获取响应
            try (CloseableHttpResponse response = httpClient.execute(httpPost)) {
                // 获取响应实体
                HttpEntity responseEntity = response.getEntity();

                // 打印响应内容
                if (responseEntity != null) {
                    String responseString = EntityUtils.toString(responseEntity,charset);
                    // 收到一个请求就进行处理
                    String ss = responseString;
                    // 通过data:进行分割，如果不进行此步，可能返回的答案会少一些内容
                    for (String s : ss.split("data:")) {
                        // 去除掉data:
                        if (s.startsWith("data:")) {
                            s = s.substring(5);
                        }
                        // 返回的数据可能是（DONE）
                        if (s.length() > 8 && !s.contains("[DONE]")) {
                            // 转换为对象
                            ChatResponseParameter responseParameter = null;
                            try {
                                responseParameter = objectMapper.readValue(s, ChatResponseParameter.class);
                                // 处理结果
                                for (Choice choice : responseParameter.getChoices()) {
                                    String content = choice.getDelta().getContent();
                                    if (content != null && !"".equals(content)) {
                                        // 保存结果
                                        sb.append(content);
                                        resConsumer.accept(content);
                                    }
                                }
                            } catch (JsonProcessingException e) {
                                System.out.println("转换异常，"+s.trim()+" 不能被转换为json");
                            }

                        }
                    }



                    log.info("Response: " + sb);
                }
            }
        } catch (Exception e) {
            log.error("Response: " + e);
        }
        // 返回最终答案，用于保存数据库的
        return sb.toString();
    }

}
