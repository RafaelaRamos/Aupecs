package ifpb.com.br.AupecApi.controlador;

import ifpb.com.br.AupecApi.model.Professor;
import ifpb.com.br.AupecApi.model.Relatorio;
import ifpb.com.br.AupecApi.repository.ProfessorRepository;
import ifpb.com.br.AupecApi.repository.RelatorioRepository;
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



    public RelatorioController(ProfessorRepository professorepository){




    }



    @RequestMapping(value = "/api/relatorio", method =  RequestMethod.POST)
    public Relatorio Post (@Valid @RequestBody Relatorio relatorio)
    {
        return repository.save(relatorio);
    }

    @RequestMapping(value = "/relatorio", method = RequestMethod.GET)
    public List<Relatorio> Get() {
        return repository.findAll();
    }

    @RequestMapping(value = "/relatorio/{id}", method = RequestMethod.GET)
    public ResponseEntity<Relatorio> GetById(@PathVariable(value = "id") long id)
    {
        Optional<Relatorio > relatorio = repository.findById(id);
        if(relatorio.isPresent())
            return new ResponseEntity<Relatorio>(relatorio.get(), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    
    


    @RequestMapping(value = "/api/relatorio/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> Delete(@PathVariable(value = "id") long id)
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
