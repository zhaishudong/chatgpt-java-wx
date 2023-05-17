package com.ttpfx.test;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ttpfx.vo.chat.ChatResponseParameter;
import com.ttpfx.vo.chat.Choice;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

/**
 * @author ttpfx
 * @date 2023/3/28
 */
public class Test {

    public static void main(String[] args) {
        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
            // 请求URL
            HttpPost httpPost = new HttpPost("https://api.openai.com/v1/chat/completions");

            // 设置请求头
            httpPost.setHeader("Content-Type", "application/json");
            httpPost.setHeader("Authorization", "Bearer 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");

            // 请求体数据
            String data = "{ \"model\": \"gpt-3.5-turbo\", \"messages\": [ { \"role\": \"user\", \"content\": \"你好\" } ], \"stream\": true }";
            StringEntity requestEntity = new StringEntity(data);

            // 设置请求体
            httpPost.setEntity(requestEntity);

            // 发送请求并获取响应
            try (CloseableHttpResponse response = httpClient.execute(httpPost)) {
                // 获取响应实体
                HttpEntity responseEntity = response.getEntity();

                // 打印响应内容
                if (responseEntity != null) {
                    String responseString = EntityUtils.toString(responseEntity);
                    // 收到一个请求就进行处理
                    StringBuilder sb = new StringBuilder();
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
                                responseParameter = new ObjectMapper().readValue(s, ChatResponseParameter.class);
                                // 处理结果
                                for (Choice choice : responseParameter.getChoices()) {
                                    String content = choice.getDelta().getContent();
                                    if (content != null && !"".equals(content)) {
                                        // 保存结果
                                        sb.append(content);
                                    }
                                }
                            } catch (JsonProcessingException e) {
                                System.out.println("转换异常，"+s.trim()+" 不能被转换为json");
                            }

                        }
                    }



                    System.out.println("Response: " + sb.toString());
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        }
}
