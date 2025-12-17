/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class OrderCreatedHandler {
  private readonly logger = new Logger(OrderCreatedHandler.name);

  @MessagePattern('order.created')
  handle(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const message = context.getMessage();

    try {
      this.logger.log(`Order received: ${JSON.stringify(data)}`);

      // 🔥 Aqui entraria regra de negócio real
      // salvar no banco, validar estoque, etc

      channel.ack(message);
    } catch (error) {
      this.logger.error('Failed to process order', error);

      // Não dá ack → RabbitMQ reprocessa
    }
  }
}
