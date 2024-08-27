import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';

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
        console.log({
          partition,
          offset: message.offset,
          value: message.value?.toString(), 
        });
      },
    });
  };

  run().catch(console.error);
};
