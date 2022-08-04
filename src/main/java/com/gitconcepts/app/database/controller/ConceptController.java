package com.gitconcepts.app.database.controller;

import com.gitconcepts.app.database.model.Concepts;
import com.gitconcepts.app.database.repository.ConceptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ConceptController {

    // Dependency Injection
    @Autowired
    private ConceptRepository repository;

    // Get Request - Retrieve all concepts
    @GetMapping("/concepts")
    public List<Concepts> getConcepts() {
        return repository.findAll();
    }

    // Get Request - Retrieve a particular concept
    @GetMapping("/concepts/{id}")
    public Concepts getParticularConcept(@PathVariable long id) {
        Optional<Concepts> concept = repository.findById(id);
        if (concept.isEmpty()) {
            throw new RuntimeException("Id " + id + " not found");
        }
        return concept.get();
    }

    // Post Request - Save a new concept
    @PostMapping("/concepts")
    public Concepts saveConcept(@RequestBody Concepts concept) {
        return repository.save(concept);
    }

    // Put Request - Update a concept
    @PutMapping("/concepts/{id}")
    public Concepts updateConcept(@PathVariable long id, @RequestBody Concepts concept) {
        Concepts updatedConcept = repository.findById(id).get();
        updatedConcept.setAbout(concept.getAbout());
        updatedConcept.setAction(concept.getAction());
        updatedConcept.setCommand(concept.getCommand());
        return repository.save(updatedConcept);
    }

    // Delete Request - Delete a concept
    @DeleteMapping("/concepts/{id}")
    public void deleteConcept(@PathVariable long id) {
        repository.deleteById(id);
    }
}
