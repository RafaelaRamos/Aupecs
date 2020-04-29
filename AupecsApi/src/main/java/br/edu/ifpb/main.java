package main.java.br.edu.ifpb;

import br.edu.ifpb.doMain.Professor;
import br.edu.ifpb.service.ProfessorService;

public class main {
    public static void main(String[] args) {

       ProfessorService ps = new ProfessorService();
        Professor p = new Professor("professor","555.444.444-47","pedagoga","teste@gmail.com","asdd","1122");
        ps.salvar(p);
        //AlunoService as = new AlunoService();
        //Aluno a = new Aluno();



    }

}
