package br.paduan.eventdashapi.model;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "itmn_alarme")
public class Alarme {  

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_alarme")
    private int idAlarme;

    @Column(name = "nome")
    private String nome;

    @Column(name = "descricao")
    private String descricao;

    public int getIdAlarme() {
        return idAlarme;
    }

    public void setIdAlarme(int idAlarme) {
        this.idAlarme = idAlarme;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

   

}