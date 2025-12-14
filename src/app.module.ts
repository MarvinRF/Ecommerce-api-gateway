import { HealthModule } from './modules/health/health.module';
import { HealthController } from './modules/health/health.controller';
import { OrdersModule } from './modules/orders/orders.module';
import { OrdersController } from './modules/orders/orders.controller';
import { RabbitmqModule } from './infra/rabbitmq/rabbitmq.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HealthModule, OrdersModule, RabbitmqModule],
  controllers: [HealthController, OrdersController],
  providers: [],
})
export class AppModule {}
