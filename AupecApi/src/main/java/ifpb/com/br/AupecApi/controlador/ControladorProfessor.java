package ifpb.com.br.AupecApi.controlador;



import ifpb.com.br.AupecApi.config.MessageResponse;
import ifpb.com.br.AupecApi.model.ERole;
import ifpb.com.br.AupecApi.model.Professor;
import ifpb.com.br.AupecApi.model.Role;
import ifpb.com.br.AupecApi.repository.ProfessorRepository;
import ifpb.com.br.AupecApi.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@CrossOrigin




public class ControladorProfessor{


    @Autowired
    private ProfessorRepository repository;
    @Autowired
    private RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;


    public ControladorProfessor(ProfessorRepository professorepository,PasswordEncoder passwordEncoder){
        this.repository= professorepository;
        this.passwordEncoder =passwordEncoder;



    }



    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @RequestMapping(value = "/professor", method = RequestMethod.GET)
    public List<Professor> Get() {
        return repository.findAll();
    }

    @RequestMapping(value = "/professor/{id}", method = RequestMethod.GET)
    public ResponseEntity<Professor> GetById(@PathVariable(value = "id") long id)
    {
        Optional<Professor > professor = repository.findById(id);
        if(professor.isPresent())
            return new ResponseEntity<Professor>(professor.get(), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @RequestMapping(value = "/api/professor/{id}", method =  RequestMethod.PUT)
    public ResponseEntity<Professor> Put(@PathVariable(value = "id") long id, @Valid @RequestBody Professor newProfessor)
    {
        Optional<Professor> p = repository.findById(id);
        if(p.isPresent()){
            Professor professor = p.get();
            professor.setNome(newProfessor.getNome());
            repository.save(professor);
            return new ResponseEntity<Professor>(professor, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @RequestMapping(value = "/api/professor/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> Delete(@PathVariable(value = "id") long id)
    {
        Optional<Professor> pessoa = repository.findById(id);
        if(pessoa.isPresent()){
            repository.delete(pessoa.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/api/professor")
    public ResponseEntity<?> registerUser(@Valid @RequestBody Professor signUpRequest) {

        if (repository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        Professor user = signUpRequest;
        user.setSenha(passwordEncoder.encode(signUpRequest.getSenha()));
        user.setActive(true);
        repository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }


}
