'use strict';

/**
 * express-type service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::express-type.express-type');
