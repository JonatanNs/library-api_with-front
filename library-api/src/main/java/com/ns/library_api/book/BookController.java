package com.ns.library_api.book;

import com.ns.library_api.entity.Book;
import com.ns.library_api.generic.GenericController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/books")
public class BookController extends GenericController<Book, Long, BookService> {
    public BookController(BookService service) {
        super(service);
    }
}
