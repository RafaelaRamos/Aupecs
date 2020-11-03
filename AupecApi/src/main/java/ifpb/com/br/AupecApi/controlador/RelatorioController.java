package ifpb.com.br.AupecApi.controlador;

import ifpb.com.br.AupecApi.Service.RelatorioImpl;
import ifpb.com.br.AupecApi.model.Atividade;
import ifpb.com.br.AupecApi.model.Professor;
import ifpb.com.br.AupecApi.model.Relatorio;
import ifpb.com.br.AupecApi.repository.ProfessorRepository;
import ifpb.com.br.AupecApi.repository.RelatorioRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class RelatorioController {


    @Autowired
    private RelatorioRepository repository;
    @Autowired
    private RelatorioImpl service;
    @Autowired
    private static Logger logger = LoggerFactory.getLogger(RelatorioController.class);


    public RelatorioController(ProfessorRepository professorepository){




    }



    @RequestMapping(value = "/api/relatorio", method =  RequestMethod.POST)
    public Relatorio Post (@Valid @RequestBody Relatorio relatorio)
    {

        logger.info(relatorio.toString());
        return service.salvar(relatorio);
    }



    @RequestMapping(value = "/api/relatorio",method = RequestMethod.GET)
    public List<Relatorio> Get(@RequestParam("id") long id) {



        return  service.getRelatorio(id);
    }


    @RequestMapping(value = "/api/relatorio", method = RequestMethod.DELETE)
    public ResponseEntity<Object> Delete(@RequestParam("id") long id)
    {
        Optional<Relatorio> relatorio = repository.findById(id);
        if(relatorio.isPresent()){
            repository.delete(relatorio.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
