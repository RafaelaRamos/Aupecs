package ifpb.com.br.AupecApi.config;

import ifpb.com.br.AupecApi.model.Aluno;
import ifpb.com.br.AupecApi.model.Professor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class MyUserDetails implements UserDetails {



    private static final long serialVersionUID = 275347623L;
    private Long id;
    private String email;
    private String password;
    private boolean active;
    private List<GrantedAuthority> authorities;
 ;

    public MyUserDetails(Professor user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.password = user.getSenha();
        this.active = user.isActive();
        this.authorities = Arrays.stream(user.getRole().split(","))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    public MyUserDetails(Aluno user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.password = user.getSenha();
        this.active = user.isActive();
        this.authorities = Arrays.stream(user.getRole().split(","))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return active;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
