package br.edu.ifpb.doMain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString
@Entity

public class Aluno {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private long id;
    private String nome;
    private LocalDate dataNascimento;
    private String filiacao;
    private String email;
    private String senha;

    //@OneToOne
    //private Professor professor;
}
