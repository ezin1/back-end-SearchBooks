import { Request, Response } from 'express';
import { ListBooksService } from "../services/books.service";
import { BooksDBRepository } from "../../../shared/repositories/implements/books.repository";

class BooksController {


    static async getBooks(req: Request, res: Response) {
        const listBooksService = new ListBooksService(new BooksDBRepository());
        const books = await listBooksService.execute();
        return res.json(books);
    }


}

export default BooksController;

