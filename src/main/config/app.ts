import express, {Application, Request, Response} from 'express';
import rateLimit from 'express-rate-limit';
import routes from './router';
import cron from 'node-cron';
export const setupApp = () => {
    const app: Application = express();
    
    app.use(express.json());

        app.use(
        rateLimit({
            windowMs: 1 * 60 * 1000, 
            max: 100, 
            message: {
            response: 'error',
            message: 'Too many requests, please try again later.',
            data: {
                status: 429,
                error: 'Too many requests',
            },
            },
        })
        );

        app.use('/api', routes);

        app.get('/', (request: Request, response: Response) => {
            response.json({
              response: 'successfull',
              message: 'Hello World 🌍',
              data: {},
            });
          }); 



    return app;
}