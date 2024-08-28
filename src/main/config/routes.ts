import {Router} from 'express';
import booksRoutes from '../routes/books.routes';
const router = Router();

router.use('/books', booksRoutes);

export default router;
