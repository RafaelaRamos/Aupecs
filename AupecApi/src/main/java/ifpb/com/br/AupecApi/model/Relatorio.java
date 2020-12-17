package ifpb.com.br.AupecApi.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity

public class Relatorio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private  int erro;
    @NotNull
    @Transient
    private long idAluno;
    private String letra;
    private String detalhes;
    private String nivel;
    @JsonFormat(pattern="dd-MM-yyyy HH:mm")
    private LocalDateTime dataHora = LocalDateTime.now() ;
    private String status;



}
