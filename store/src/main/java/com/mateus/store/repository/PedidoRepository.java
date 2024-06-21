package com.mateus.store.repository;

import com.mateus.store.entity.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, UUID> {
    List<Pedido> findByClienteId(UUID id);
    List<Pedido> findByDataTransacao(LocalDateTime dataTransacao);
}
