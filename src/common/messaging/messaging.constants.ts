export const EXCHANGES = {
  ORDERS: 'orders',
  PAYMENTS: 'payments',
  NOTIFICATIONS: 'notifications',
} as const;

export const ROUTING_KEYS = {
  ORDER_CREATED: 'order.created',
  ORDER_CONFIRMED: 'order.confirmed',
  PAYMENT_REQUESTED: 'payment.requested',
} as const;
