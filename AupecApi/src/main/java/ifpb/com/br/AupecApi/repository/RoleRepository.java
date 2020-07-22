package ifpb.com.br.AupecApi.repository;

import ifpb.com.br.AupecApi.model.ERole;
import ifpb.com.br.AupecApi.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    @Query(value ="SELECT * FROM ROLE WHERE ROLE.name = ?1",nativeQuery = true)
    Optional<Role> findByName(String name);

}
