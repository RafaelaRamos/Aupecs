package ifpb.com.br.AupecApi.repository;

import ifpb.com.br.AupecApi.model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface ProfessorRepository  extends JpaRepository<Professor, Long> {


   @Query(value ="SELECT * FROM professor WHERE professor.email =?1",nativeQuery = true)
   Optional<Professor> findByUsername(String email);

   @Query(value ="SELECT * FROM professor WHERE professor.Id = ?1",nativeQuery = true)
   Professor findId(long id);

   Boolean existsByEmail(String email);
}



