package com.mateus.store.service;

import com.mateus.store.entity.Categoria;
import com.mateus.store.repository.CategoriaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CategoriaService {
    @Autowired
    private CategoriaRepository repository;

    public List<Categoria> findAll() {
        return this.repository.findAll();
    }

    public Categoria findById(UUID id) {
        Optional<Categoria> categoria = this.repository.findById(id);
        return categoria.orElse(null);
    }

    public Categoria create(Categoria categoriaParams) {
        return this.repository.save(categoriaParams);
    }

    public Categoria alter(Categoria categoriaParams, UUID id) {
        Categoria categoria = this.findById(id);
        if(categoria == null)
            return null;

        BeanUtils.copyProperties(categoriaParams, categoria);
        return this.repository.save(categoria);
    }

    public void delete(Categoria categoria) {
        this.repository.delete(categoria);
    }
}
