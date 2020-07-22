package ifpb.com.br.AupecApi.controlador;


import ifpb.com.br.AupecApi.model.Aluno;
import ifpb.com.br.AupecApi.model.Professor;
import ifpb.com.br.AupecApi.repository.AlunoRepository;
import ifpb.com.br.AupecApi.repository.ProfessorRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
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
@AllArgsConstructor

public class ControladorAluno {


    @Autowired
    private AlunoRepository repository;
    private final PasswordEncoder passwordEncoder;

    @RequestMapping(value = "/api/aluno", method =  RequestMethod.POST)
    public Aluno Post (@Valid @RequestBody Aluno aluno)
    {   aluno.setSenha(passwordEncoder.encode(aluno.getSenha()));
        return repository.save(aluno);
    }



    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @RequestMapping(value = "/alunos", method = RequestMethod.GET)
    public List<Aluno> Get() {
        return repository.findAll();
    }



    @RequestMapping(value = "/aluno/{id}", method = RequestMethod.GET)
    public ResponseEntity<Aluno> GetById(@PathVariable(value = "id") long id)
    {
        Optional<Aluno > aluno = repository.findById(id);
        if(aluno.isPresent())
            return new ResponseEntity<Aluno>(aluno.get(), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @RequestMapping(value = "/api/aluno/{id}", method =  RequestMethod.PUT)
    public ResponseEntity<Aluno> Put(@PathVariable(value = "id") long id, @Valid @RequestBody Aluno newAluno)
    {
        Optional<Aluno> p = repository.findById(id);
        if(p.isPresent()){
            Aluno aluno = p.get();
            aluno.setNome(newAluno.getNome());
            repository.save(aluno);
            return new ResponseEntity<Aluno>(aluno, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @RequestMapping(value = "/api/aluno/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> Delete(@PathVariable(value = "id") long id)
    {
        Optional<Aluno> aluno = repository.findById(id);
        if(aluno.isPresent()){
            repository.delete(aluno.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


}
