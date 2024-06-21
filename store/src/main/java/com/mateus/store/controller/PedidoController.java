package com.mateus.store.controller;

import com.mateus.store.entity.Pedido;
import com.mateus.store.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/pedido")
public class PedidoController {
    @Autowired
    private PedidoService service;

    @GetMapping
    public ResponseEntity<List<Pedido>> findAll() {
        List<Pedido> pedidos = this.service.findAll();
        return ResponseEntity.ok(pedidos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pedido> findById(@PathVariable("id") UUID id) {
        Pedido pedido = this.service.findById(id);
        if(pedido == null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(pedido);
    }

    @GetMapping("/cliente/{clienteId}")
    public ResponseEntity<List<Pedido>> findByCliente(@PathVariable("clienteId") UUID clienteId) {
        List<Pedido> pedidos = this.service.findByCliente(clienteId);
        if(pedidos == null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(pedidos);
    }

    @PostMapping("/cadastrar/{caixaId}")
    public ResponseEntity<Pedido> create(@RequestBody Pedido pedido, @PathVariable("caixaId") UUID caixaId) {
        Pedido pedidoCriado = this.service.create(pedido, caixaId);
        if(pedidoCriado == null)
            return ResponseEntity.badRequest().build();

        return new ResponseEntity<>(pedidoCriado, HttpStatus.CREATED);
    }

    @PutMapping("/alterar/{id}")
    public ResponseEntity<Pedido> alter(@RequestBody Pedido pedido, @PathVariable("id") UUID id) {
        Pedido pedidoAlterado = this.service.alter(pedido, id);
        if(pedidoAlterado == null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(pedidoAlterado);
    }

    @DeleteMapping("/excluir/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") UUID id) {
        Boolean returnDelete = this.service.delete(id);
        if(!returnDelete)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(true);
    }
}