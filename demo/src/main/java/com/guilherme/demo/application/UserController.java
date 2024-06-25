package com.guilherme.demo.application;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guilherme.demo.domain.entity.User;
import com.guilherme.demo.domain.exception.DuplicatedTupleException;
import com.guilherme.demo.domain.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final UserMapper mapper;
    @PostMapping
    public ResponseEntity save(@RequestBody UserDTO dto){
        try {
            User user = mapper.maptoUser(dto);
            userService.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).build();
            
        } catch (DuplicatedTupleException e) {
            Map<String, String> jsonResultado = Map.of("Erro", e.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(jsonResultado);
        }
    }
    @PostMapping("/auth")
    public ResponseEntity autenticate(@RequestBody CredentialDto credentials) {
        var token = userService.authenticate(credentials.getEmail(), credentials.getSenha());
        if(token == null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok(token);
    }
    
}
