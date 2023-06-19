'use strict';

/**
 * spinner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spinner.spinner');
