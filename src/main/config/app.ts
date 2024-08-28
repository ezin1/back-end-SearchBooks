import express, { Application, Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import routes from './routes';
import cron from 'node-cron';
import  cors  from 'cors';
import { startKafkaConsumer } from '../infra/kafka/kafka';
export const setupApp = () => {
    const app: Application = express();

    app.use(express.json());
    app.set('trust proxy', 1);
    app.use(cors());

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

    // cron.schedule('*/1 * * * *', () => {
    //     startKafkaConsumer(
    //       ['localhost:19092'], 
    //       'scraping-client',
    //       'example_consumer', 
    //       'scraping-topic' 
    //     ).then(() => {
    //       console.log('Kafka consumer started successfully.');
    //     }).catch((error) => {
    //       console.error('Error starting Kafka consumer:', error);
    //     });
    //   });

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