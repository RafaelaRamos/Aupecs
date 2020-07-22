package ifpb.com.br.AupecApi.controlador;

import ifpb.com.br.AupecApi.model.Nivel;
import ifpb.com.br.AupecApi.repository.NivelRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
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
public class NivelController {

    @Autowired
    private NivelRepository repository;


    @RequestMapping(value = "/api/nivel", method =  RequestMethod.POST)
    public Nivel Post (@Valid @RequestBody Nivel nivel)
    {
        return repository.save(nivel);
    }
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @RequestMapping(value = "/api/nivel", method = RequestMethod.GET)
    public List<Nivel> Get() {
        return repository.findAll();
    }

    @RequestMapping(value = "/nivel/{id}", method = RequestMethod.GET)
    public ResponseEntity<Nivel> GetById(@PathVariable(value = "id") long id)
    {
        Optional<Nivel > nivel = repository.findById(id);
        if(nivel.isPresent())
            return new ResponseEntity<Nivel>(nivel.get(), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @RequestMapping(value = "/api/nivel/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> Delete(@PathVariable(value = "id") long id)
    {
        Optional<Nivel> nivel = repository.findById(id);
        if(nivel.isPresent()){
            repository.delete(nivel.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
