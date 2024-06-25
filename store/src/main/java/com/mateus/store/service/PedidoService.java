package com.mateus.store.service;

import com.mateus.store.entity.Caixa;
import com.mateus.store.entity.Cliente;
import com.mateus.store.entity.Pedido;
import com.mateus.store.entity.Produto;
import com.mateus.store.repository.ClienteRepository;
import com.mateus.store.repository.PedidoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PedidoService {
    @Autowired
    private PedidoRepository repository;

    @Autowired
    private CaixaService caixaService;

    @Autowired
    private ClienteService clienteService;

    public List<Pedido> findAll() {
        return this.repository.findAll();
    }

    public Pedido findById(UUID id) {
        Optional<Pedido> pedido = this.repository.findById(id);
        return pedido.orElse(null);
    }

    public List<Pedido> findByCliente(UUID clienteId) {
        Cliente cliente = this.clienteService.findById(clienteId);
        if(cliente == null)
            return null;

        return this.repository.findByClienteId(clienteId);
    }

    public List<Pedido> findByDataTransacao(LocalDateTime dataTransacao) {
        return null;
    }

    public Pedido create(Pedido pedido, UUID caixaId) {
        Caixa caixaEncontrado = caixaService.findStatus(caixaId);
        if(caixaEncontrado == null)
            return null;

        for(Produto produto:pedido.getProdutos()) {
            pedido.setValorTotal(pedido.getValorTotal() + produto.getPreco());
        }

        pedido.setNumero(this.gerarNumero());
        this.repository.save(pedido);
        this.caixaService.addPedido(pedido, caixaEncontrado);
        return pedido;
    }

    public Pedido alter(Pedido pedidoParams, UUID id) {
        Pedido pedido = this.findById(id);
        if(pedido == null)
            return null;

        BeanUtils.copyProperties(pedidoParams, pedido);
        return this.repository.save(pedido);
    }

    public Boolean delete(UUID id) {
        Pedido pedido = this.findById(id);
        if(pedido == null)
            return false;

        this.repository.delete(pedido);
        return true;
    }

    private Integer gerarNumero() {
        List<Pedido> pedidos = this.findAll();

        if(pedidos.isEmpty())
            return 1;

        return pedidos.getLast().getNumero() + 1;
    }
}
