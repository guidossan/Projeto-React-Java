package com.guilherme.demo.application;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ImageDTO {
    private String url;
    private String name;
    private String extencion;
    private Long size;
    private LocalDate uploadDate;

}
