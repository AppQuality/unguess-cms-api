module.exports = {
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
  'preview-button': {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: 'api::service.service',
          targetField: 'slug',
          draft: {
            query: {
              type: 'service',
            },
          },
          published: {
            basePath: 'services',
          },
        }
      ],
    },
  },
};
