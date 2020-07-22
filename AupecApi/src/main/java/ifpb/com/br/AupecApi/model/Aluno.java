package ifpb.com.br.AupecApi.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
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
