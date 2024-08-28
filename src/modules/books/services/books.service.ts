import { TBook } from "../../../shared/repositories/implements/books.types";
import { BooksRepository } from "../../../shared/repositories/books.repository";

export class ListBooksService {
  constructor(private booksRepository: BooksRepository) {}

  async execute(): Promise<TBook[]> {
    const books = await this.booksRepository.listBooks();

    return books;
  }
}