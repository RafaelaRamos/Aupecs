package br.edu.ifpb.doMain;

import br.edu.ifpb.doMain.Nivel;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString

@Entity
public class Relatorio {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @OneToOne
    private Nivel nivel;
    private  int acerto;
    private  int erro;
    private LocalDateTime datahora;
    private long tempo;


}
