'use strict';

/**
 * express service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::express.express');
