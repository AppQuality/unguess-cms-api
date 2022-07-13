'use strict';

/**
 * express-type router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::express-type.express-type');
