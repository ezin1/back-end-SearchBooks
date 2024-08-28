import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';
import { BooksDBRepository } from '../../../shared/repositories/implements/books.repository';
export const startKafkaConsumer = async (
  brokers: string[],
  clientId: string,
  groupId: string,
  topic: string
): Promise<void> => {
  const kafka = new Kafka({
    clientId: clientId,
    brokers: brokers,
  });

  const consumer: Consumer = kafka.consumer({ groupId: groupId });

  const run = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: topic, fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
        const scrapedData = message.value?.toString();
        
        if (scrapedData) {
          const booksDetails = JSON.parse(scrapedData);
          console.log({
            partition,
            offset: message.offset,
            booksDetails,
          });


          const booksRepository = new BooksDBRepository();

          await booksRepository.insertBooks(booksDetails);

          console.log('Books inserted in database');

        
          

        }
      },
    });
  };

  run().catch(console.error);
};
