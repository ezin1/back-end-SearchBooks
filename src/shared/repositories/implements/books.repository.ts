import { BooksRepository } from "../books.repository";
import { TBook } from "./books.types";
import {Knex} from 'knex';
import { localDb } from "../../database/pg-connection";

export class BooksDBRepository implements BooksRepository {

    conn: Knex<any, unknown[]>;

    constructor() {
        this.conn = localDb;
      }
    
      async insertBooks(books: TBook[]): Promise<void> {
        await this.conn('books').insert(books);
    }

    async listBooks(): Promise<TBook[]> {
        return await this.conn('books').select('*');
    }
}