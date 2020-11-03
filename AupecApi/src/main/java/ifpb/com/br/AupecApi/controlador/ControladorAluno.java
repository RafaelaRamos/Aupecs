package ifpb.com.br.AupecApi.controlador;


import ifpb.com.br.AupecApi.Service.AlunoServiceImpl;
import ifpb.com.br.AupecApi.config.MessageResponse;
import ifpb.com.br.AupecApi.model.Aluno;
import ifpb.com.br.AupecApi.model.Professor;
import ifpb.com.br.AupecApi.model.Senha;
import ifpb.com.br.AupecApi.repository.AlunoRepository;
import ifpb.com.br.AupecApi.repository.ProfessorRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin


public class ControladorAluno {


    @Autowired
    private AlunoRepository repository;
    @Autowired
    private AlunoServiceImpl service;
    private final PasswordEncoder passwordEncoder;


    public ControladorAluno(AlunoRepository alunoRepository, PasswordEncoder passwordEncoder){
        this.repository= alunoRepository;
        this.passwordEncoder =passwordEncoder;



    }
    @RequestMapping(value = "/api/aluno", method =  RequestMethod.POST)
    public ResponseEntity<?> Post (@Valid @RequestBody Aluno signUpRequest) {

        if (repository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        Aluno aluno=signUpRequest;
       aluno.setSenha(passwordEncoder.encode(signUpRequest.getSenha()));
       aluno.setActive(true);
       aluno.setRole("ALUNO");
       service.salvar(aluno);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }


    @RequestMapping(value = "/api/alunos",method = RequestMethod.GET)
    public List<Aluno> Get(@RequestParam("id") long id) {
        return  service.getAlunoID(id);
    }



    @RequestMapping(value = "/api/aluno", method = RequestMethod.GET)
    public ResponseEntity<Aluno> GetById(@RequestParam("id") long id)
    {
        Optional<Aluno > aluno = repository.findById(id);
        if(aluno.isPresent())
            return new ResponseEntity<Aluno>(aluno.get(), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @RequestMapping(value = "/api/aluno", method =  RequestMethod.PUT)
    public ResponseEntity<Aluno> Put(@RequestParam("id") long id, @Valid @RequestBody Aluno newAluno)
    {
        Optional<Aluno> a = repository.findById(id);
        if(a.isPresent()){
            Aluno aluno = a.get();
            aluno.setNome(newAluno.getNome());
            aluno.setDataNascimento(newAluno.getDataNascimento());
            aluno.setFiliacao(newAluno.getFiliacao());
            aluno.setObjetivos(newAluno.getObjetivos());
            repository.saveAndFlush(aluno);
            return new ResponseEntity<Aluno>(aluno, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @RequestMapping(value = "/api/aluno", method = RequestMethod.DELETE)
    public ResponseEntity<Object> Delete (@RequestParam("id") long id)
    {
        Optional<Aluno> aluno = repository.findById(id);
        if(aluno.isPresent()){
            repository.delete(aluno.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value = "/api/senhaAluno", method =  RequestMethod.PUT)
    public ResponseEntity<Aluno> PutSenha(@RequestParam("id")  long id, @Valid @RequestBody Senha senha)
    {



        Optional<Aluno> p = repository.findById(id);
        if(p.isPresent()){
            Aluno aluno = p.get();

            if(passwordEncoder.matches(senha.getSenhaAtual(),aluno.getSenha())){


               aluno.setSenha((passwordEncoder.encode(senha.getSenha())));
                repository.saveAndFlush(aluno);
            }
            else{
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<Aluno>(aluno, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
