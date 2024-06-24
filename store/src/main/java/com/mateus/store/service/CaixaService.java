package com.mateus.store.service;

import com.mateus.store.entity.Caixa;
import com.mateus.store.entity.Pedido;
import com.mateus.store.repository.CaixaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CaixaService {
    @Autowired
    private CaixaRepository repository;

    public List<Caixa> findAll() {
        return this.repository.findAll();
    }

    public Caixa findById(UUID id) {
        Optional<Caixa> caixa = this.repository.findById(id);
        return caixa.orElse(null);
    }

    public Caixa create(Caixa caixa) {
        caixa.setNumero(this.gerarNumero());
        return this.repository.save(caixa);
    }

    public List<Pedido> showPedidos(UUID id) {
        Caixa caixa = this.findById(id);
        if(caixa == null)
            return null;

        return caixa.getPedidos();
    }

    public Caixa alter(Caixa caixaParams, UUID id) {
        Caixa caixa = this.findById(id);
        if(caixa == null)
            return null;

        BeanUtils.copyProperties(caixaParams, caixa);
        return this.repository.save(caixa);
    }

    public Boolean openCaixa(UUID id) {
        Caixa caixa = this.findById(id);
        if(caixa == null)
            return false;

        this.repository.abrirCaixa(id);
        return true;
    }

    public Boolean closeCaixa(UUID id) {
        Caixa caixa = this.findById(id);
        if(caixa == null)
            return false;

        this.repository.fecharCaixa(LocalDateTime.now() ,id);
        return true;
    }

    public void addPedido(Pedido pedido, Caixa caixa) {
        caixa.getPedidos().add(pedido);
        caixa.setValorTotal(caixa.getValorTotal() + pedido.getValorTotal());
        this.repository.save(caixa);
    }

    public Caixa findStatus(UUID id) {
        Caixa caixa = this.findById(id);
        if(caixa == null || !caixa.getStatus())
            return null;

        return caixa;
    }

    public Boolean delete(UUID id) {
        Caixa caixa = this.findById(id);
        if(caixa == null)
            return false;

        this.repository.deleteById(id);
        return true;
    }

    public Integer gerarNumero() {
        List<Caixa> caixas = this.findAll();
        Integer num = 1;

        if(caixas.isEmpty()) {
            return num;
        }

        return caixas.getLast().getNumero() + num;
    }
}
