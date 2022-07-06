'use strict';

/**
 *  express controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::express.express');
