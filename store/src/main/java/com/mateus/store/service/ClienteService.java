package com.mateus.store.service;

import com.mateus.store.entity.Cliente;
import com.mateus.store.repository.ClienteRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository repository;

    public List<Cliente> findAll() {
        return this.repository.findAll();
    }

    public Cliente findById(UUID id) {
        Optional<Cliente> cliente = this.repository.findById(id);
        return cliente.orElse(null);
    }

    public Cliente create(Cliente cliente) {
        return this.repository.save(cliente);
    }

    public Cliente alter(Cliente cliente, UUID id) {
        Cliente clienteEncontrado = this.findById(id);
        if(clienteEncontrado == null)
            return null;

        BeanUtils.copyProperties(cliente, clienteEncontrado);
        return this.repository.save(clienteEncontrado);
    }

    public Boolean delete(UUID id) {
        Cliente cliente = this.findById(id);
        if(cliente == null)
            return false;

        this.repository.deleteById(id);
        return true;
    }
}
