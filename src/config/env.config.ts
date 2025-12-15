export default () => ({
  app: {
    port: parseInt(process.env.APP_PORT ?? '3000', 10),
  },
  rabbitmq: {
    url: process.env.RABBITMQ_URL,
    exchange: process.env.RABBITMQ_EXCHANGE,
  },
});
