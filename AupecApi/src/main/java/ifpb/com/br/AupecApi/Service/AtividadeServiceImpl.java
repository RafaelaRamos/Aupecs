package ifpb.com.br.AupecApi.Service;

import ifpb.com.br.AupecApi.model.Aluno;
import ifpb.com.br.AupecApi.model.Atividade;
import ifpb.com.br.AupecApi.repository.AlunoRepository;
import ifpb.com.br.AupecApi.repository.AtividadeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AtividadeServiceImpl {


    @Autowired
    private AlunoRepository repository;
    @Autowired
    private AtividadeRepository atividadeRepository;
    @Autowired
    private static Logger logger = LoggerFactory.getLogger(UserDetailsServiceImpl.class);

    public Atividade salvar(Atividade atividade){
    Optional<Atividade> a = atividadeRepository.getAtividade(atividade.getNivel(),
            atividade.getIdAluno(),
            atividade.getLetra());
        try{
            if(!a.isPresent()){
                Aluno aluno = repository.alunoByID(atividade.getIdAluno());
                aluno.addAtividade(atividade);
                repository.saveAndFlush(aluno);

            }

        }catch (Exception e){
    e.printStackTrace();

    }
    return atividade ;
    }

    public List<Atividade> getAtividades (long id){
        List<Atividade> atividades = atividadeRepository.findByIdAluno(id);
        logger.info(atividades.toString());
        return  atividades;


    }

    public List<Atividade> getAtividades(long id, String nivel){
        logger.info("ID"+id,nivel);
        logger.info(nivel);
        List<Atividade> atividades = atividadeRepository.findByAtividade(nivel,id);
        logger.info(atividades.toString());

        return atividades;


    }

}
