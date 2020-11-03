package ifpb.com.br.AupecApi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor

public class Senha implements Serializable {
    @NotNull
    private String SenhaAtual;
    @NotNull
    private String senha;
}
