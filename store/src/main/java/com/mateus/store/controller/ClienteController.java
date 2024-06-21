package com.mateus.store.controller;

import com.mateus.store.entity.Cliente;
import com.mateus.store.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/cliente")
public class ClienteController {
    @Autowired
    private ClienteService service;

    @GetMapping
    public ResponseEntity<List<Cliente>> findAll() {
        List<Cliente> clientes = this.service.findAll();
        return ResponseEntity.ok(clientes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> findById(@PathVariable("id") UUID id) {
        Cliente cliente = this.service.findById(id);
        if(cliente == null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(cliente);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<Cliente> create(@RequestBody Cliente cliente) {
        Cliente clienteCadastrado = this.service.create(cliente);
        if(cliente == null)
            return ResponseEntity.badRequest().build();

        return new ResponseEntity<>(clienteCadastrado, HttpStatus.CREATED);
    }

    @PutMapping("/alterar/{id}")
    public ResponseEntity<Cliente> alter(@RequestBody Cliente cliente, @PathVariable("id") UUID id) {
        Cliente clienteAlterado = this.service.alter(cliente, id);
        if(cliente == null)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(clienteAlterado);
    }

    @DeleteMapping("/excluir/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") UUID id) {
        Boolean returnDelete = this.service.delete(id);
        if(!returnDelete)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(true);
    }
}
