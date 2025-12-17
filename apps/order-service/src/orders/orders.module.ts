import { Module } from '@nestjs/common';
import { OrderCreatedHandler } from './handlers/order-created.handler';

@Module({
  imports: [],
  controllers: [],
  providers: [OrderCreatedHandler],
})
export class OrdersModule {}
