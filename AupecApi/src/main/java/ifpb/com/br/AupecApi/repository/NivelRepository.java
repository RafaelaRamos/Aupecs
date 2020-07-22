package ifpb.com.br.AupecApi.repository;

import ifpb.com.br.AupecApi.model.Nivel;
import ifpb.com.br.AupecApi.model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface NivelRepository extends JpaRepository<Nivel, Long> {
}
