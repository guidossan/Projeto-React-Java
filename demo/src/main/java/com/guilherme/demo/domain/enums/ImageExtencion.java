package com.guilherme.demo.domain.enums;
import java.util.Arrays;
import org.springframework.http.MediaType;

public enum ImageExtencion {
    PNG(MediaType.IMAGE_PNG),
    GIF(MediaType.IMAGE_GIF),
    JPEG(MediaType.IMAGE_JPEG);
    private MediaType mediaType;
    ImageExtencion(MediaType mediaType){
        this.mediaType = mediaType;
    }
    public static ImageExtencion valueOf(MediaType mediaType){
        return Arrays.stream(values()).filter(ie -> mediaType.equals(mediaType)).findFirst().orElse(null);
    }
}
