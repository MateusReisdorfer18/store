package com.mateus.store.controller;

import com.mateus.store.entity.Caixa;
import com.mateus.store.entity.Pedido;
import com.mateus.store.service.CaixaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/caixa")
public class CaixaController {
    @Autowired
    private CaixaService service;

    @GetMapping
    public ResponseEntity<List<Caixa>> findAll() {
        List<Caixa> caixas = this.service.findAll();
        return new ResponseEntity<>(caixas, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Caixa> findById(@PathVariable("id") UUID id) {
        Caixa caixa = this.service.findById(id);
        if(caixa == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(caixa, HttpStatus.OK);
    }

    @GetMapping("/pedidos/{id}")
    public ResponseEntity<List<Pedido>> showPedidos(@PathVariable("id") UUID id) {
        List<Pedido> pedidos = this.service.showPedidos(id);
        if(pedidos == null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(pedidos);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<Caixa> create(@RequestBody Caixa caixaParams) {
        Caixa caixa = this.service.create(caixaParams);
        if(caixa == null)
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);

        return new ResponseEntity<>(caixa, HttpStatus.CREATED);
    }

    @PutMapping("/alterar/{id}")
    public ResponseEntity<Caixa> alter(@RequestBody Caixa caixaParams, @PathVariable("id") UUID id) {
        Caixa caixa = this.service.alter(caixaParams, id);
        if(caixa == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(caixa, HttpStatus.OK);
    }

    @PatchMapping("/abrir-caixa/{id}")
    public ResponseEntity<Boolean> openCaixa(@PathVariable("id") UUID id) {
        Boolean returnOpenCaixa = this.service.openCaixa(id);
        if(!returnOpenCaixa)
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PatchMapping("/fechar-caixa/{id}")
    public ResponseEntity<Boolean> closeCaixa(@PathVariable("id") UUID id) {
        Boolean returnCloseCaixa = this.service.closeCaixa(id);
        if(!returnCloseCaixa)
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @DeleteMapping("/excluir/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") UUID id) {
        Boolean returnDelete = this.service.delete(id);
        if(!returnDelete)
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
