import { TBook } from './implements/books.types';

export interface BooksRepository {
    insertBooks(books: TBook[]): Promise<void>;
    listBooks(): Promise<TBook[]>;
}

