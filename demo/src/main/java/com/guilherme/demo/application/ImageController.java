package com.guilherme.demo.application;

import java.io.IOException;
import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
@CrossOrigin("*")
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
    @GetMapping("{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable String id){
        var possibleImage = service.findById(id);
        if (possibleImage.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        var image = possibleImage.get();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(image.getExtencion().getMediaType());
        headers.setContentLength(image.getSize());
        //inline; filename ="image.PNG"
        headers.setContentDispositionFormData("inline; filename=\"" + image.getFileName() + "\"", image.getFileName());
        return new ResponseEntity<>(image.getFile(), headers, HttpStatus.OK);
    }

    //http://localhost:8080/images?extencio=PNG&query=Nature

    @GetMapping
    public ResponseEntity<List<ImageDTO>> search(
                @RequestParam(value = "extencion", required = false, defaultValue = "") String extencion,
                @RequestParam(value = "query", required = false)String query){

        var result = service.search(ImageExtencion.ofName(extencion), query);

        var images = result.stream().map(image -> {
            var url = buildImageUri(image);
            return mapper.imageToDto(image, url.toString());
        }).collect(Collectors.toList());

        return ResponseEntity.ok(images);
    }

    private URI buildImageUri(Image image){
        String imagePath = "/" + image.getId();
        return ServletUriComponentsBuilder
                    .fromCurrentRequestUri()
                    .path(imagePath).build().toUri();
    }

}
