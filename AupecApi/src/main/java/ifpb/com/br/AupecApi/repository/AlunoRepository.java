package ifpb.com.br.AupecApi.repository;

import ifpb.com.br.AupecApi.model.Aluno;
import ifpb.com.br.AupecApi.model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Long> {

    @Query(value ="SELECT * FROM aluno WHERE aluno.email = ?1",nativeQuery = true)
    Optional<Aluno> findByUsername(String email);


    @Query(value ="SELECT * FROM aluno WHERE aluno.id_professor= ?1 ORDER BY aluno.nome DESC",nativeQuery = true)
    List<Aluno> findByIdProfessor(long id);

    @Query(value="SELECT * FROM aluno WHERE aluno.id =?1",nativeQuery = true)
    Aluno alunoByID(long id);

    Boolean existsByEmail(String email);
}
