package com.mateus.store.repository;

import com.mateus.store.entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, UUID> {
    @Modifying
    @Transactional
    @Query("UPDATE Produto p SET p.quantidade = ?1 WHERE p.id = ?2")
    void alterarQuantidade(Integer quantidade, UUID id);

    List<Produto> findByCategoriaId(UUID categoriaId);
}