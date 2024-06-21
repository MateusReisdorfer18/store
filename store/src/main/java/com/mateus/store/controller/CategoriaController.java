package com.mateus.store.controller;

import com.mateus.store.entity.Categoria;
import com.mateus.store.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {
    @Autowired
    private CategoriaService service;

    @GetMapping
    public ResponseEntity<List<Categoria>> findAll() {
        List<Categoria> categorias = this.service.findAll();
        return new ResponseEntity<>(categorias, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> findById(@PathVariable("id") UUID id) {
        Categoria categoria = this.service.findById(id);
        if(categoria == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(categoria, HttpStatus.OK);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<Categoria> create(@RequestBody Categoria categoriaParams) {
        Categoria categoria = this.service.create(categoriaParams);
        if(categoria == null)
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);

        return new ResponseEntity<>(categoria, HttpStatus.CREATED);
    }

    @PutMapping("/alterar/{id}")
    public ResponseEntity<Categoria> alter(@RequestBody Categoria categoriaParams, @PathVariable("id") UUID id) {
        Categoria categoria = this.service.alter(categoriaParams, id);
        if(categoria == null)
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);

        return new ResponseEntity<>(categoria, HttpStatus.OK);
    }

    @DeleteMapping("/excluir/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") UUID id) {
        Categoria categoria = this.service.findById(id);
        if(categoria == null)
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);

        this.service.delete(categoria);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
