package ifpb.com.br.AupecApi.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity


public class Atividade {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @NotNull
    private String letra;
    @NotNull
    private String nivel;
    @NotNull
    @Transient
    private long idAluno;
    @NotNull
    @JsonFormat(pattern="dd-MM-yyyy HH:mm")
    private LocalDateTime dataHora = LocalDateTime.now() ;

    private StatusAtividade status;
    @OneToOne
    private Relatorio relatorio;


}
