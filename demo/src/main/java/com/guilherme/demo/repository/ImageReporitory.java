package com.guilherme.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.guilherme.demo.domain.entity.Image;
import com.guilherme.demo.domain.enums.ImageExtencion;

public interface ImageReporitory extends JpaRepository<Image, String>, JpaSpecificationExecutor<Image>{
    default List<Image> findByExtencionAndNameOrTagsLike(ImageExtencion extencio, String query){
         
        return findAll();
    }
}
