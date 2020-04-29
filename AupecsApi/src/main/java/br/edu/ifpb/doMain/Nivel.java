package br.edu.ifpb.doMain;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString
@Entity

public class Nivel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String letra;
    private int aluno;
    private int professor;
}
