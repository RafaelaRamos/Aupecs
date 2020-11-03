package ifpb.com.br.AupecApi.controlador;

import ifpb.com.br.AupecApi.Service.AtividadeServiceImpl;
import ifpb.com.br.AupecApi.Service.UserDetailsServiceImpl;
import ifpb.com.br.AupecApi.model.Aluno;
import ifpb.com.br.AupecApi.model.Atividade;
import ifpb.com.br.AupecApi.model.StatusAtividade;
import ifpb.com.br.AupecApi.repository.AtividadeRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
@AllArgsConstructor
@NoArgsConstructor
@RestController
@CrossOrigin
public class AtividadeController {

    @Autowired
    private AtividadeRepository repository;
    @Autowired
    private AtividadeServiceImpl service;
    @Autowired
    private static Logger logger = LoggerFactory.getLogger(AtividadeController.class);


    @RequestMapping(value = "/api/atividade", method =  RequestMethod.POST)
    public Atividade Post (@Valid @RequestBody Atividade atividade)
    {
        atividade.setStatus(StatusAtividade.PENDENTE);
        return service.salvar(atividade);
    }


    @RequestMapping(value = "/api/atividade",method = RequestMethod.GET)
    public List<Atividade> Get(@RequestParam("id") long id) {
        return  service.getAtividades(id);
    }


    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @RequestMapping(value = "/api/nivel", method = RequestMethod.GET)
    public List<Atividade> Get() {
        return repository.findAll();
    }

    @RequestMapping(value = "/nivel/{id}", method = RequestMethod.GET)
    public ResponseEntity<Atividade> GetById(@PathVariable(value = "id") long id)
    {
        Optional<Atividade> nivel = repository.findById(id);
        if(nivel.isPresent())
            return new ResponseEntity<Atividade>(nivel.get(), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @RequestMapping(value = "/api/nivel", method = RequestMethod.DELETE)
    public ResponseEntity<Object> Delete (@RequestParam("id") long id)
    {
        Optional<Atividade> nivel = repository.findById(id);
        if(nivel.isPresent()){
            repository.delete(nivel.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @RequestMapping(value = "/api/atividades",method = RequestMethod.GET)
    public List<Atividade> Get(@RequestParam("id") long id,@RequestParam("nivel")String nivel) {


        return service.getAtividades(id,nivel);
    }

}
