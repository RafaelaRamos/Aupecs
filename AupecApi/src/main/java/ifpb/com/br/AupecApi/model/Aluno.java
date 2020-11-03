package ifpb.com.br.AupecApi.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Aluno {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private long id;
    @NotNull
    private String nome;
    @NotNull
    @Column(name = "dataNascimento", columnDefinition = "DATE")
    @JsonFormat(pattern="dd/MM/yyyy")
    private LocalDate dataNascimento;
    @NotNull
    private String filiacao;
    @Column(unique=true)
    private String email;
    private String role ;
    private String senha;
    private String objetivos;
    @Transient
    private long idProfessor;
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "idAluno",referencedColumnName = "id")
    public List<Atividade> atividades;
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "idAluno",referencedColumnName = "id")
    public List<Relatorio> relatorios;
    private boolean active;


    public List<Atividade> addAtividade(Atividade a){
        atividades.add(a);
        return  atividades;
    }

    public List<Relatorio> addRelatorio(Relatorio relatorio){
        relatorios.add(relatorio);
        return  relatorios;
    }
}

