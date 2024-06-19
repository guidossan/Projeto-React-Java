package com.guilherme.demo.domain.service;

import java.util.Optional;

import com.guilherme.demo.domain.entity.Image;

public interface ImageService {
    Image save(Image image);
    Optional<Image> findById(String id);
    
}
