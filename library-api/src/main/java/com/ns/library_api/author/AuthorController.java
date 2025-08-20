package com.ns.library_api.author;

import com.ns.library_api.entity.Author;
import com.ns.library_api.generic.GenericController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/author")
public class AuthorController extends GenericController<Author, Long, AuthorService> {

    public AuthorController(AuthorService service) {
        super(service);
    }
}
