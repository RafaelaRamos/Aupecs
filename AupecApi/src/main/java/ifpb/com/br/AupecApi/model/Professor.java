package ifpb.com.br.AupecApi.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;


import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;


@Data
@NoArgsConstructor
@Entity
@Getter
@Setter
public class Professor implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private String nome;
    @NotNull
    @Column(name = "dataNascimento", columnDefinition = "DATE")
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date dataNascimento;
    @NotNull
    private String cpf;
    @NotNull
    private String formacao;
    @Email
    private String email;

    private String senha;
    private boolean active;
    private String role ;
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "idProfessor",referencedColumnName = "id")
    private List<Aluno> alunos;


    public Professor(String username, String email, String encode) {
    }

    public Professor(long id, String nome, Date dataNascimento, String cpf, String formacao, @Email String email,  String senha, String role,boolean active) {
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.formacao = formacao;
        this.email = email;
        this.senha = senha;
        this.role = role;

        this.active =active;
    }


    public List<Aluno> addAluno(Aluno a){
        alunos.add(a);
        return  alunos;
    }




}
