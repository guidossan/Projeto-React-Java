package com.guilherme.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.guilherme.demo.domain.entity.Image;

public interface ImageReporitory extends JpaRepository<Image, String>{
    
}
