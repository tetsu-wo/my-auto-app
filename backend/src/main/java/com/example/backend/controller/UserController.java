package com.example.backend.controller;

import com.example.backend.model.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = {"http://localhost:3000", "https://vercel.app"}) // フロントエンドのURLに合わせて許可
public class UserController {

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        // 動作確認用のダミーデータを返す
        return new User(id, "金島", "yamada@example.com");
    }
}

