package com.homelyPro.demo.controller;

import com.homelyPro.demo.model.Worker;
import com.homelyPro.demo.repository.WorkerRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/workers")
@CrossOrigin(origins = "*")
public class WorkerController {

    private final WorkerRepository workerRepository;

    public WorkerController(WorkerRepository workerRepository) {
        this.workerRepository = workerRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerWorker(@RequestBody Worker worker) {

        workerRepository.save(worker);

        return ResponseEntity.ok("Worker registered successfully");
    }
}