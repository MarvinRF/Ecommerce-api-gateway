import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
  RmqOptions,
} from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RabbitMQClient {
  public client: ClientProxy;

  constructor(private readonly config: ConfigService) {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [this.config.get<string>('rabbitmq.url')],
        queue: this.config.get<string>('rabbitmq.queue'),
        exchange: this.config.get<string>('rabbitmq.exchange'),
        exchangeType: 'topic',
        wildcards: true,
        persistent: true,
      },
    } as RmqOptions);
  }
}
