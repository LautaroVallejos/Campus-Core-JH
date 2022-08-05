'use strict';

/**
 * preceptor service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::preceptor.preceptor');
