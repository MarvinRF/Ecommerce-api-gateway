export interface EventPublisher {
  publish<TEvent>(pattern: string, payload: TEvent): Promise<void>;
}
