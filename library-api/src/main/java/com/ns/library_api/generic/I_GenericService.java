package com.ns.library_api.generic;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface I_GenericService<E, I> { // E = entity , I = id
    Page<E> all(Pageable pageable);
    Optional<E> byId(I id);
    void deleteById(I id);
    E saveOrUpdate(E entity);
}
