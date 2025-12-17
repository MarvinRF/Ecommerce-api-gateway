import { Body, Controller, Post } from '@nestjs/common';
import { RabbitMQClient } from 'src/infra/rabbitmq/rabbitmq.client';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly rmq: RabbitMQClient) {}

  @Post()
  create(@Body() dto: CreateOrderDto) {
    this.rmq.client.emit('order.created', {
      ...dto,
      createdAt: new Date().toISOString(),
    });
    return {
      message: 'Order event emitted',
    };
  }
}
