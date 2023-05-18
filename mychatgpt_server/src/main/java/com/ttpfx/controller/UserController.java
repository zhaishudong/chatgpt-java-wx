package com.ttpfx.controller;

import com.ttpfx.entity.User;
import com.ttpfx.service.UserService;
import com.ttpfx.utils.R;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author ttpfx
 * @date 2023/3/29
 */
@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {

    @Resource
    private UserService userService;

    public static ConcurrentHashMap<String, User> loginUser = new ConcurrentHashMap<>();

    public static ConcurrentHashMap<String, Long> loginUserKey = new ConcurrentHashMap<>();
    @PostMapping("/login")
    public R login(@RequestBody Map<String,String> userMap) {
        String username = userMap.get("username");
        String password = userMap.get("password");
        if (username == null) return R.fail("必须填写用户名");


        User user = userService.queryByName(username);
        if (user == null) return R.fail("用户名不存在");
        String targetPassword = user.getPassword();
        if (targetPassword == null) return R.fail("用户密码异常");
        if (!targetPassword.equals(password)) return R.fail("密码错误");

        loginUser.put(username, user);
        loginUserKey.put(username, System.currentTimeMillis());
        return R.ok(String.valueOf(loginUserKey.get(username)));
    }

    @RequestMapping("/logout")
    public R logout(String username) {
        loginUser.remove(username);
        loginUserKey.remove(username);
        return R.ok();
    }

    @PostMapping("/checkUserKey")
    public R checkUserKey(@RequestBody Map<String,Object> userMap){
        String username="";
        try {
            if (!ObjectUtils.isEmpty(userMap.get("username"))){
                username = (String) userMap.get("username");
            }
            Long key = 0L;
            if (!ObjectUtils.isEmpty(userMap.get("key"))){
                key = Long.parseLong((String) userMap.get("key"));
            }
            if (!Objects.equals(loginUserKey.get(username), key)){
                return R.fail("用户在其他地方登录！！！");
            }
        }catch (Exception e){
            return R.fail("校验异常");
        }

        return R.ok();
    }

    @RequestMapping("/loginUser")
    public R loginUser(){
        return R.ok("success",loginUser.keySet());
    }
}
