package com.mateus.store.repository;

import com.mateus.store.entity.Caixa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.UUID;

@Repository
public interface CaixaRepository extends JpaRepository<Caixa, UUID> {
    @Modifying
    @Transactional
    @Query("UPDATE Caixa c SET c.status = true WHERE c.id =?1")
    void abrirCaixa(UUID id);

    @Modifying
    @Transactional
    @Query("UPDATE Caixa c SET c.status = false, c.dataFechamento = ?1 WHERE c.id = ?2")
    void fecharCaixa(LocalDateTime dataFechamento , UUID id);
}