import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RabbitMQClient } from './rabbitmq.client';

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [RabbitMQClient],
  exports: [RabbitMQClient],
})
export class RabbitMQModule {}
