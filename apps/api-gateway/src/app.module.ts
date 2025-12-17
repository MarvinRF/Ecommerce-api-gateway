import { HealthModule } from './modules/health/health.module';
import { HealthController } from './modules/health/health.controller';
import { OrdersModule } from './modules/orders/orders.module';
import { OrdersController } from './modules/orders/orders.controller';
import { RabbitMQModule } from './infra/rabbitmq/rabbitmq.module';
import { Module } from '@nestjs/common';
import envConfig from './config/env.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [envConfig] }),
    HealthModule,
    OrdersModule,
    RabbitMQModule,
  ],
  controllers: [HealthController, OrdersController],
  providers: [],
})
export class AppModule {}
