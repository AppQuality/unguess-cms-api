module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'customer@unguess.io',
          defaultReplyTo: 'customer@unguess.io',
          testAddress: 'it@unguess.io',
        },
      },
    },
  });
  