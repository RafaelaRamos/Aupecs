package ifpb.com.br.AupecApi.repository;

import ifpb.com.br.AupecApi.model.Atividade;
import ifpb.com.br.AupecApi.model.Professor;
import ifpb.com.br.AupecApi.model.Relatorio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RelatorioRepository extends JpaRepository<Relatorio, Long> {

    @Query(value ="SELECT * FROM relatorio WHERE relatorio.Id_aluno = ?1  ORDER BY relatorio.data_hora ASC",nativeQuery = true)
    List<Relatorio> findByRelatorios(long id);




}
