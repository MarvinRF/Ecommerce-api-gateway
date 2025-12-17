import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
        queue: process.env.RABBITMQ_ORDER_QUEUE || 'order_queue',
        noAck: false,
        prefetchCount: 10,
        persistent: true,
        queueOptions: {
          durable: true,
          arguments: {
            'x-message-ttl': 86400000, // 24h
            'x-dead-letter-exchange': 'dlx',
            'x-dead-letter-routing-key': `${process.env.RABBITMQ_ORDER_QUEUE || 'order_queue'}.dlq`,
          },
        },
      },
    },
  );

  await app.listen();
}
void bootstrap();
