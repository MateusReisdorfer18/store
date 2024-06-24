package com.mateus.store.controller;

import com.mateus.store.entity.Produto;
import com.mateus.store.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/produto")
public class ProdutoController {
    @Autowired
    private ProdutoService service;

    @GetMapping
    public ResponseEntity<List<Produto>> findAll() {
        List<Produto> produtos = this.service.findAll();
        return new ResponseEntity<>(produtos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> findById(@PathVariable("id") UUID id) {
        Produto produto = this.service.findById(id);
        if(produto == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(produto, HttpStatus.OK);
    }

    @GetMapping("/categoria/{categoriaId}")
    public ResponseEntity<List<Produto>> findByCategoriaId(@PathVariable("categoriaId") UUID categoriaId) {
        List<Produto> produtos = this.service.findByCategoriaId(categoriaId);
        if(produtos == null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(produtos);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<Produto> create(@RequestBody Produto produtoParams) {
        Produto produto = this.service.create(produtoParams);
        if(produto == null)
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);

        return new ResponseEntity<>(produto, HttpStatus.CREATED);
    }

    @PatchMapping("/alterar/{id}")
    public ResponseEntity<Produto> alter(@RequestBody Produto produtoParams, @PathVariable("id") UUID id) {
        Produto produto = this.service.alter(produtoParams, id);
        if(produto == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(produto, HttpStatus.OK);
    }

    @PatchMapping("/comprar/{id}")
    public ResponseEntity<Produto> buy(@PathVariable("id") UUID id, @RequestBody Map<String, Integer> parametros){
        Produto produto = this.service.buy(id, parametros.get("quantidade"));
        if(produto == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(produto, HttpStatus.OK);
    }

    @PatchMapping("/vender/{id}")
    public ResponseEntity<Produto> sell(@PathVariable("id") UUID id, @RequestBody Map<String, Integer> paramentros) {
        Produto produto = this.service.sell(id, paramentros.get("quantidade"));
        if(produto == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(produto, HttpStatus.OK);
    }

    @DeleteMapping("/excluir/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") UUID id) {
        Boolean returnExcluir = this.service.delete(id);
        if(!returnExcluir)
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
