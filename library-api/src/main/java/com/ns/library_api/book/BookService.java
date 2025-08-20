package com.ns.library_api.book;

import com.ns.library_api.entity.Book;
import com.ns.library_api.generic.GenericService;
import org.springframework.stereotype.Service;

@Service
public class BookService extends GenericService<Book, Long, BookRepository> {
    public BookService(BookRepository repo) {
        super(repo);
    }
}
