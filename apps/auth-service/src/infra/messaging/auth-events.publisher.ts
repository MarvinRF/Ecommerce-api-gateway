/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Inject, Injectable } from '@nestjs/common';
import {
  USER_CREATED_EVENT,
  UserCreatedEvent,
} from '@contracts/events/user-created.event';
import type { EventPublisher } from '@contracts/messaging/event-publisher.interface';
import { EVENT_PUBLISHER } from '@contracts/messaging/messaging.tokens';

@Injectable()
export class AuthEventsPublisher {
  constructor(
    @Inject(EVENT_PUBLISHER)
    private readonly eventPublisher: EventPublisher,
  ) {}

  async userCreated(user: { id: string; email: string }) {
    const event: UserCreatedEvent = {
      userId: user.id,
      email: user.email,
      occurredAt: new Date().toISOString(),
    };

    await this.eventPublisher.publish(USER_CREATED_EVENT, event);
  }
}
