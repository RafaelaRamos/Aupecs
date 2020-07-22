package ifpb.com.br.AupecApi.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Nivel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String letra;
    private int aluno;
    private int professor;
}
