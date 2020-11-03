package ifpb.com.br.AupecApi.Service;


import ifpb.com.br.AupecApi.config.MyUserDetails;
import ifpb.com.br.AupecApi.model.Aluno;
import ifpb.com.br.AupecApi.model.Professor;
import ifpb.com.br.AupecApi.repository.AlunoRepository;
import ifpb.com.br.AupecApi.repository.ProfessorRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
public class AlunoServiceImpl  {
    @Autowired
    private ProfessorRepository repository;
    @Autowired
    private AlunoRepository alunoRepository;
    @Autowired
    private static Logger logger = LoggerFactory.getLogger(UserDetailsServiceImpl.class);



  public Aluno salvar( Aluno aluno){
      logger.info(aluno.toString());
       Professor professor = repository.findId(aluno.getIdProfessor());
       professor.addAluno(aluno);
       repository.saveAndFlush(professor);
        return aluno;

    }

    public List<Aluno> getAlunoID (long id){
        List<Aluno> alunos = alunoRepository.findByIdProfessor(id);
        logger.info(alunos.toString());
      return  alunos;


    }





}
