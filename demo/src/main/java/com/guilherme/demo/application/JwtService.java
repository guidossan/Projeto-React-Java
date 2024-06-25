package com.guilherme.demo.application;

import org.springframework.stereotype.Service;

import com.guilherme.demo.domain.AccessToken;
import com.guilherme.demo.domain.entity.User;

@Service
public class JwtService {
    public AccessToken generateToken(User user){
        return new AccessToken("xxx");
    }
}
