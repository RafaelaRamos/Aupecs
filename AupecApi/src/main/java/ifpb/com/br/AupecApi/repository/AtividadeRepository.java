package ifpb.com.br.AupecApi.repository;

import ifpb.com.br.AupecApi.model.Aluno;
import ifpb.com.br.AupecApi.model.Atividade;
import ifpb.com.br.AupecApi.model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository

public interface AtividadeRepository extends JpaRepository<Atividade, Long> {

    @Query(value ="SELECT * FROM atividade WHERE atividade.Id_aluno = ?1",nativeQuery = true)
    List<Atividade> findByIdAluno(long id);

    @Query(value ="SELECT * FROM atividade WHERE  atividade.Nivel=?1 and atividade.id_Aluno=?2 ORDER BY atividade.letra ASC",nativeQuery = true)
    List<Atividade> findByAtividade(@Param("nivel") String nivel,@Param("id") long id);


    @Query(value ="SELECT * FROM atividade WHERE  atividade.Nivel=?1 and atividade.id_Aluno=?2 and atividade.letra=?3",nativeQuery = true)
    Optional<Atividade> getAtividade(@Param("nivel") String nivel, @Param("id") long id, @Param("letra") String letra);
}
