package br.edu.ifpb.service;


import br.edu.ifpb.doMain.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;
import java.util.List;

public class AlunoService implements main.java.br.edu.ifpb.service.AlunoIF {

    EntityManager em = Persistence.createEntityManagerFactory("AUPECS").createEntityManager();


    @Override
    public void salvar(Object T) {
        EntityTransaction transaction = em.getTransaction();
        transaction.begin();
        em.persist(T);
        transaction.commit();
    }

    @Override
    public void delete(long id) {
        EntityTransaction transaction = em.getTransaction();
        transaction.begin();
        Aluno aluno = em.find(Aluno.class, id);
        em.remove(aluno);
        transaction.commit();
    }

    @Override
    public boolean atualizar(Object T) {
        return false;
    }

    @Override
    public List<Aluno> listar() {
        String consultasql = "SELECT * FROM Professor";
        String sql = consultasql;
        Query createNativeQuery = em.createNativeQuery(sql, Aluno.class);
        List<Aluno> resultList = createNativeQuery.getResultList();
        return resultList;
    }

    @Override
    public Aluno buscar(long id) {
        EntityTransaction transaction = em.getTransaction();
        transaction.begin();
        Aluno aluno;
        aluno = em.find(Aluno.class, id);
        transaction.commit();
        return aluno;
    }
}
