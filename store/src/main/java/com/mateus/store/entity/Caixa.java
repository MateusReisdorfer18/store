package com.mateus.store.entity;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "caixa")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Caixa {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Setter(AccessLevel.NONE)
    private UUID id;

    @NotNull
    private Boolean status = true;

    @ManyToMany
    private List<Pedido> pedidos = new ArrayList<>();

    @Nullable
    private LocalDateTime dataFechamento;

    private Double valorTotal = 0.0;
}
