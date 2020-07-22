package ifpb.com.br.AupecApi.model;

import lombok.*;


import javax.persistence.*;
import javax.validation.constraints.Email;
import java.io.Serializable;
import java.time.LocalDate;


@Data
@NoArgsConstructor
@Entity
@Getter
@Setter
public class Professor implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String nome;
    @Column(columnDefinition = "DATE")
    private LocalDate dataNascimento;
    private String cpf;
    private String formacao;
    @Email
    private String email;
    private String senha;
    private boolean active;
    private String role ;

    public Professor(String username, String email, String encode) {
    }

    public Professor(long id, String nome, LocalDate dataNascimento, String cpf, String formacao, @Email String email,  String senha, String role,boolean active) {
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





    // @OneToMany
  //  private List<Aluno> alunos;
}
