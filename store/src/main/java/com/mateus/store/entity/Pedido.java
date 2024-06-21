package com.mateus.store.entity;

import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "pedido")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Setter(AccessLevel.NONE)
    private UUID id;

    @NotNull
    @ManyToOne
    private Cliente cliente;

    @ManyToMany
    private List<Produto> produtos = new ArrayList<>();

    @NotNull
    private LocalDateTime dataTransacao = LocalDateTime.now();

    private Double valorTotal = 0.0;
}