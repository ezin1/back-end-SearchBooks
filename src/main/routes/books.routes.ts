import {Router} from 'express';
import BooksController from '../../modules/books/controllers/books.controller';

const router = Router();

router.get('/list', BooksController.getBooks);

export default router;


