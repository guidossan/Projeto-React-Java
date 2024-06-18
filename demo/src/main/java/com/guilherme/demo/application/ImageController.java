package com.guilherme.demo.application;

import java.io.IOException;
import java.net.URI;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

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
    private final ImagesMapper mapper;

    @PostMapping()
    public ResponseEntity<String> save(
            @RequestParam("file") MultipartFile file,
            @RequestParam("name")String name,
            @RequestParam("tags") List<String> tags
        ) throws IOException{

        log.info("Imagem recebida: name {}, size {}", file.getOriginalFilename(), file.getSize());
      
       
       
        Image image = mapper.mapToImage(file, name, tags);
        Image savedImage = service.save(image);
        URI imageUri = buildImageUri(savedImage);
        return ResponseEntity.created(imageUri).build();
    }
    private URI buildImageUri(Image image){
        String imagePath = "/" + image.getId();
        return ServletUriComponentsBuilder.fromCurrentRequest().path(imagePath).build().toUri();
    }
}
