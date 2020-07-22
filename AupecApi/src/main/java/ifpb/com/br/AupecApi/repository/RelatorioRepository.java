package ifpb.com.br.AupecApi.repository;

import ifpb.com.br.AupecApi.model.Professor;
import ifpb.com.br.AupecApi.model.Relatorio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RelatorioRepository extends JpaRepository<Relatorio, Long> {
}
