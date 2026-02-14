package com.portfolio.backend.controller;

import com.portfolio.backend.model.Contact;
import com.portfolio.backend.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<Map<String, Object>> createContact(@Valid @RequestBody Contact contact) {
        try {
            Contact savedContact = contactService.saveContact(contact);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Contact message received successfully!");
            response.put("contactId", savedContact.getId());
            
            log.info("Contact created successfully with id: {}", savedContact.getId());
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
            
        } catch (Exception e) {
            log.error("Error creating contact: ", e);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Failed to save contact message");
            response.put("error", e.getMessage());
            
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping
    public ResponseEntity<List<Contact>> getAllContacts() {
        try {
            List<Contact> contacts = contactService.getAllContacts();
            return ResponseEntity.ok(contacts);
        } catch (Exception e) {
            log.error("Error fetching contacts: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contact> getContactById(@PathVariable Long id) {
        try {
            Contact contact = contactService.getContactById(id);
            return ResponseEntity.ok(contact);
        } catch (Exception e) {
            log.error("Error fetching contact with id {}: ", id, e);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<List<Contact>> getContactsByEmail(@PathVariable String email) {
        try {
            List<Contact> contacts = contactService.getContactsByEmail(email);
            return ResponseEntity.ok(contacts);
        } catch (Exception e) {
            log.error("Error fetching contacts for email {}: ", email, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> deleteContact(@PathVariable Long id) {
        try {
            contactService.deleteContact(id);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Contact deleted successfully");
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("Error deleting contact with id {}: ", id, e);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Failed to delete contact");
            
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> healthCheck() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "UP");
        response.put("message", "Portfolio API is running");
        return ResponseEntity.ok(response);
    }
}
