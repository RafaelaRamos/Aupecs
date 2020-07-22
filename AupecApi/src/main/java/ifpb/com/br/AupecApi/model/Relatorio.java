package ifpb.com.br.AupecApi.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity

public class Relatorio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @OneToOne
    private Nivel nivel;
    private  int acerto;
    private  int erro;
    private LocalDateTime datahora;
    private long tempo;


}
