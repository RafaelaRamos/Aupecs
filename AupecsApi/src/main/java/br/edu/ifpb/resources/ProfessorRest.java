package br.edu.ifpb.resources;


import br.edu.ifpb.doMain.Professor;
import br.edu.ifpb.service.ProfessorService;

import java.io.StringReader;
import java.util.List;
import java.util.stream.Collectors;
import javax.ejb.Stateless;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonObject;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Response;

public class ProfessorRest {


    private final String url = "http://localhost:4848/aupecs-api/api/professor";
    private final Client client = ClientBuilder.newClient();
    private final WebTarget professor = client.target(url);
    private ProfessorService ps = new ProfessorService();

    public void salvarProduto(Professor p) {
        Response resposta = professor.request().
                post(
                        Entity.json(p)
                );

        String json = resposta.readEntity(String.class);
        ps.salvar(converterPara(json));


    }
    public Professor converterPara(String json) {
        JsonObject jsonObject = Json.createReader(
                new StringReader(json)
        ).readObject();

        return new Professor(jsonObject);
    }

}
