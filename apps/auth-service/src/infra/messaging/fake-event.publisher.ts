import { Injectable, Logger } from '@nestjs/common';
import { EventPublisher } from '@contracts/messaging/event-publisher.interface';

@Injectable()
export class FakeEventPublisher implements EventPublisher {
  private readonly logger = new Logger(FakeEventPublisher.name);

  publish<TEvent>(pattern: string, payload: TEvent): Promise<void> {
    this.logger.log(`[FAKE EVENT] ${pattern} -> ${JSON.stringify(payload)}`);
    return Promise.resolve();
  }
}
