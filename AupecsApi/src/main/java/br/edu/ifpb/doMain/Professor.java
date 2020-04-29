package br.edu.ifpb.doMain;

import lombok.*;

import javax.json.JsonObject;
import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@ToString
@Entity
public class Professor implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String nome;
    private LocalDate dataNascimento;
    private String cpf;
    private String formacao;
    private String email;
    private String senha;
    private String codigo;

    public Professor(JsonObject json) {
        this.id = json.getInt("id");
        this.nome = json.getString("nome");
        this.nome = json.getString("formacao");
        this.nome = json.getString("email");
        this.nome = json.getString("cpf");


    }



    public Professor(String nome,String cpf, String formacao,String email, String senha ,String codigo) {
        this.nome= nome;
        this.dataNascimento = LocalDate.now();
        this.cpf=cpf;
        this.formacao=formacao;
        this.email=email;
        this.senha=senha;
        this.codigo= codigo;


    }

    // @OneToMany
  //  private List<Aluno> alunos;
}
