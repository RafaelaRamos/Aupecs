package ifpb.com.br.AupecApi.Service;


import ifpb.com.br.AupecApi.model.Aluno;
import ifpb.com.br.AupecApi.model.Atividade;
import ifpb.com.br.AupecApi.model.Relatorio;
import ifpb.com.br.AupecApi.repository.AlunoRepository;
import ifpb.com.br.AupecApi.repository.RelatorioRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RelatorioImpl {

    @Autowired
    private RelatorioRepository repository;
    @Autowired
    private static Logger logger = LoggerFactory.getLogger(UserDetailsServiceImpl.class);

    @Autowired
    private AlunoRepository alunoRepository;
    public List<Relatorio> getRelatorio (long id){
        List<Relatorio> relatorios = repository.findByRelatorios(id);
        logger.info(relatorios.toString());
        return  relatorios;


    }

    public Relatorio salvar(Relatorio relatorio){

              try{  Aluno aluno = alunoRepository.alunoByID(relatorio.getIdAluno());
                aluno.addRelatorio(relatorio);
                alunoRepository.saveAndFlush(aluno);}

              catch (Exception e) {
                  e.printStackTrace();
              }
        return relatorio;
    }
}
