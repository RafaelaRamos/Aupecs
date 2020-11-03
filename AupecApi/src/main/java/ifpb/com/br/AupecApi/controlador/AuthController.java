package ifpb.com.br.AupecApi.controlador;

import ifpb.com.br.AupecApi.Service.UserDetailsServiceImpl;
import ifpb.com.br.AupecApi.config.JwtResponse;
import ifpb.com.br.AupecApi.config.JwtUtils;
import ifpb.com.br.AupecApi.config.LoginRequest;
import ifpb.com.br.AupecApi.config.MyUserDetails;
import ifpb.com.br.AupecApi.repository.ProfessorRepository;
import ifpb.com.br.AupecApi.repository.RoleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")

public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;
    
    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    private UserDetailsServiceImpl userDetailsService;
    @Autowired
    private static Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

logger.info(loginRequest.getEmail());
        HttpHeaders responseHeaders = new HttpHeaders();

        Authentication authenticate = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
        );

        final MyUserDetails userDetails = (MyUserDetails) userDetailsService.loadUserByUsername(loginRequest.getEmail());
        final String jwt = jwtUtils.generateToken(userDetails);
        JwtResponse response = new JwtResponse(jwt);

        response.setId(userDetails.getId());
        response.setEmail(userDetails.getUsername());
        List<String> roles = new ArrayList<String>();
        userDetails.getAuthorities().forEach((a) -> roles.add(a.getAuthority()));
        response.setRoles(roles);

        return new ResponseEntity<>(response, responseHeaders, HttpStatus.OK);
    }

}
