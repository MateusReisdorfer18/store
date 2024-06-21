package com.mateus.store.service;

import com.mateus.store.entity.Categoria;
import com.mateus.store.entity.Produto;
import com.mateus.store.repository.ProdutoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository repository;

    @Autowired
    private CategoriaService categoriaService;

    public List<Produto> findAll() {
        return this.repository.findAll();
    }

    public Produto findById(UUID id) {
        Optional<Produto> produto = this.repository.findById(id);
        return produto.orElse(null);
    }

    public List<Produto> findByCategoriaId(UUID categoriaId) {
        Categoria categoria = this.categoriaService.findById(categoriaId);
        if(categoria == null)
            return null;

        return this.repository.findByCategoriaId(categoriaId);
    }

    public Produto create(Produto produto) {
        return this.repository.save(produto);
    }

    public Produto buy(UUID id, Integer quantidade) {
        Produto produto = this.findById(id);
        if(produto == null)
            return null;

        produto.setQuantidade(produto.getQuantidade() + quantidade);
        this.repository.alterarQuantidade(produto.getQuantidade(), produto.getId());
        return produto;
    }

    public Produto sell(UUID id, Integer quantidade) {
        Produto produto = this.findById(id);
        if(produto == null || produto.getQuantidade() < quantidade)

            return null;

        produto.setQuantidade(produto.getQuantidade() - quantidade);
        this.repository.alterarQuantidade(produto.getQuantidade(), produto.getId());
        return produto;
    }

    public Produto alter(Produto produto, UUID id) {
        Produto produtoExistente = this.findById(id);
        if(produto == null)
            return null;

        BeanUtils.copyProperties(produto, produtoExistente);
        this.repository.save(produtoExistente);
        return produtoExistente;
    }

    public Boolean delete(UUID id) {
        Produto produto = this.findById(id);
        if(produto == null)
            return false;

        this.repository.deleteById(id);
        return true;
    }
}
