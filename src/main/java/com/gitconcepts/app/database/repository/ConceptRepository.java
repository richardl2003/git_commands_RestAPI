package com.gitconcepts.app.database.repository;

import com.gitconcepts.app.database.model.Concepts;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConceptRepository extends JpaRepository<Concepts, Long> {
}
