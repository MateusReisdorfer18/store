package com.mateus.store.entity;

import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.UUID;

@Entity
@Table(name = "produto")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Setter(AccessLevel.NONE)
    private UUID id;

    @NotNull
    private String nome;
    @NotNull
    private Double preco;
    @NotNull
    private Integer quantidade;
    @NotNull
    @ManyToOne
    private Categoria categoria;
}
