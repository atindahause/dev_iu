package br.paduan.eventdashapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.paduan.eventdashapi.model.Alarme;
import br.paduan.eventdashapi.repository.AlarmeRepo;

@RestController
@CrossOrigin("*")
@RequestMapping("/alarme")

public class AlarmeController {

    @Autowired
    private AlarmeRepo repo;

    @GetMapping("/todos")
    public ResponseEntity <List<Alarme>> buscarAlarmes() {      

        List<Alarme> alarmes = (List<Alarme>)repo.findAll();
               
        return ResponseEntity.ok(alarmes);
    }






}