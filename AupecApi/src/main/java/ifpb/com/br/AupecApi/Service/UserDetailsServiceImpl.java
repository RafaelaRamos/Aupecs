package ifpb.com.br.AupecApi.Service;

import ifpb.com.br.AupecApi.config.MyUserDetails;
import ifpb.com.br.AupecApi.model.Aluno;
import ifpb.com.br.AupecApi.model.Professor;
import ifpb.com.br.AupecApi.model.Senha;
import ifpb.com.br.AupecApi.repository.AlunoRepository;
import ifpb.com.br.AupecApi.repository.ProfessorRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl   implements UserDetailsService {


    @Autowired
    ProfessorRepository userRepository;
    @Autowired
    AlunoRepository alunoRepository;

    @Autowired

    private static Logger logger = LoggerFactory.getLogger(UserDetailsServiceImpl.class);

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Optional<Aluno> userAluno= alunoRepository.findByUsername(email);

        if(userAluno.isPresent()){
            userAluno.orElseThrow(() -> new UsernameNotFoundException("Not found: " + email));
            return userAluno.map(MyUserDetails::new).get();


        }
        else{ Optional<Professor> user= userRepository.findByUsername(email);
        logger.info(user.toString());
        user.orElseThrow(() -> new UsernameNotFoundException("Not found: " + email));
        return user.map(MyUserDetails::new).get();

    }
}}