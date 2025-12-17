import { Module } from '@nestjs/common';
import { AuthEventsPublisher } from './infra/messaging/auth-events.publisher';
import { FakeEventPublisher } from './infra/messaging/fake-event.publisher';
import { EVENT_PUBLISHER } from '@contracts/messaging/messaging.tokens';

@Module({
  providers: [
    {
      provide: EVENT_PUBLISHER as string,
      useClass: FakeEventPublisher,
    },
    AuthEventsPublisher,
  ],
  exports: [AuthEventsPublisher],
})
export class AuthServiceModule {}
