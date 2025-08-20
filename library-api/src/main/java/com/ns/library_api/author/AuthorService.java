package com.ns.library_api.author;

import com.ns.library_api.entity.Author;
import com.ns.library_api.generic.GenericService;
import org.springframework.stereotype.Service;


@Service
public class AuthorService extends GenericService<Author, Long, AuthorRepository> {

    public AuthorService(AuthorRepository repo) {
        super(repo);
    }
}
