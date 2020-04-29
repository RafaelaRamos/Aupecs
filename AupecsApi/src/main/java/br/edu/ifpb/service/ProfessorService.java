package br.edu.ifpb.service;



import br.edu.ifpb.doMain.Professor;

import javax.ejb.Stateless;
import javax.persistence.*;
import java.util.List;

@Stateless
public class ProfessorService {


    EntityManager em = Persistence.createEntityManagerFactory("AUPECS").createEntityManager();

    public Professor salvar(Professor T) {

        EntityTransaction transaction = em.getTransaction();
        transaction.begin();
        em.persist(T);
        transaction.commit();
            return T;
    }


    public void delete(long id) {

        EntityTransaction transaction = em.getTransaction();
        transaction.begin();
        Professor professor = em.find(Professor.class, id);
        em.remove(professor);
        transaction.commit();
    }

    //@Override
    public boolean atualizar(Object T) {
        return false;
    }

   // @Override
    public List<Professor> listar() {

        String consultasql = "SELECT * FROM Professor";
        String sql = consultasql;
        Query createNativeQuery = em.createNativeQuery(sql, Professor.class);
        List<Professor> resultList = createNativeQuery.getResultList();
        return resultList;
    }

   // @Override
    public Professor buscar(long id) {

        EntityTransaction transaction = em.getTransaction();
        transaction.begin();
       Professor professor;
       professor = em.find(Professor.class, id);
        transaction.commit();
        return professor;
    }


}

