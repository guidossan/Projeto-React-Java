package com.guilherme.demo.application;

import java.io.IOException;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.guilherme.demo.domain.entity.Image;
import com.guilherme.demo.domain.enums.ImageExtencion;
import com.guilherme.demo.domain.service.ImageService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;



@RestController
@RequestMapping("/images")
@Slf4j
@RequiredArgsConstructor
public class ImageController {

    private final ImageService service;

    @PostMapping()
    public ResponseEntity<String> save(
            @RequestParam("file") MultipartFile file,
            @RequestParam("name")String name,
            @RequestParam("tags") List<String> tags
        ) throws IOException{

        log.info("Imagem recebida: name {}, size {}", file.getOriginalFilename(), file.getSize());
      
       
       
        Image image = Image.builder()
                    .name(name)
                    .tags(String.join(",", tags))
                    .size(file.getSize())
                    .extencion(ImageExtencion.valueOf(MediaType.valueOf(file.getContentType())))
                    .file(file.getBytes())
                    .build();
        service.save(image);
        return ResponseEntity.ok().build();
    }
}
