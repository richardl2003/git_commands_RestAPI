package com.gitconcepts.app.database.controller;

import com.gitconcepts.app.database.model.Concepts;
import com.gitconcepts.app.database.repository.ConceptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
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
    public ResponseEntity<?> getParticularConcept(@PathVariable long id) {
        Optional<Concepts> concept = repository.findById(id);
        return concept.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Post Request - Save a new concept
    @PostMapping("/concepts")
    public ResponseEntity<Concepts> saveConcept(@RequestBody Concepts concept) throws URISyntaxException {
        Concepts saved = repository.save(concept);
        return ResponseEntity.created(new URI("/api/concepts/" + saved.getId()))
                .body(saved);
    }

    // Put Request - Update a concept
    @PutMapping("/concepts/{id}")
    public ResponseEntity<Concepts> updateConcept(@RequestBody Concepts concept) {
        Concepts updated = repository.save(concept);
        return ResponseEntity.ok().body(updated);
    }

    // Delete Request - Delete a concept
    @DeleteMapping("/concepts/{id}")
    public ResponseEntity<?> deleteConcept(@PathVariable long id) {
        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
