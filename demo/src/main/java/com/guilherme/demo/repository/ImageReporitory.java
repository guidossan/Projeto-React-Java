package com.guilherme.demo.repository;

import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.util.StringUtils;

import com.guilherme.demo.domain.entity.Image;
import com.guilherme.demo.domain.enums.ImageExtencion;

public interface ImageReporitory extends JpaRepository<Image, String>, JpaSpecificationExecutor<Image>{
    default List<Image> findByExtencionAndNameOrTagsLike(ImageExtencion extencion, String query){
        //SELECT * FROM IMAGE WHERE 1 = 1
        Specification<Image> conjuction = (root, q, criteriaBuilder) -> criteriaBuilder.conjunction();
        Specification<Image> spec = Specification.where(conjuction);

        //AND EXTENCION ="PNG"
        if (extencion!= null){
            Specification<Image> extencioEqual =  (root, q, cb) -> cb.equal(root.get("extencion"), extencion);
            spec = spec.and(extencioEqual);
        } 
        //AND(NAME LIKE 'QUERY' OR TAGS LIKE 'QUERY')
        //RIVER => %RI$
        if (StringUtils.hasText(query)){
            Specification<Image> nameLike = (root, q, cb) -> cb.like(cb.upper(root.get("name")), "%"+query.toUpperCase()+"%");
            Specification<Image> tagsLike = (root, q, cb) -> cb.like(cb.upper(root.get("tags")), "%"+query.toUpperCase()+"%");
            Specification<Image> nameOrTagsLike = Specification.anyOf(nameLike, tagsLike);
            spec = spec.and(nameOrTagsLike);
        }
        return findAll(spec);
    }
}
