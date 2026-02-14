package com.portfolio.backend.service;

import com.portfolio.backend.model.Contact;
import com.portfolio.backend.repository.ContactRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ContactService {

    private final ContactRepository contactRepository;

    @Transactional
    public Contact saveContact(Contact contact) {
        log.info("Saving contact from: {} - {}", contact.getName(), contact.getEmail());
        return contactRepository.save(contact);
    }

    public List<Contact> getAllContacts() {
        log.info("Fetching all contacts");
        return contactRepository.findAllByOrderByCreatedAtDesc();
    }

    public Contact getContactById(Long id) {
        log.info("Fetching contact with id: {}", id);
        return contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found with id: " + id));
    }

    public List<Contact> getContactsByEmail(String email) {
        log.info("Fetching contacts for email: {}", email);
        return contactRepository.findByEmailOrderByCreatedAtDesc(email);
    }

    @Transactional
    public void deleteContact(Long id) {
        log.info("Deleting contact with id: {}", id);
        contactRepository.deleteById(id);
    }
}
