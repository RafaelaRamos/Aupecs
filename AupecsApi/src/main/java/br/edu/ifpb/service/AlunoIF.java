package main.java.br.edu.ifpb.service;

import java.util.List;

public interface AlunoIF<T> {

    public void salvar(Object T);
    public void delete(long id);
    public boolean atualizar(Object T);
    public List<T> listar();
    public T buscar(long id);


}
