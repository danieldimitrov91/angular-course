/***
 * Libraries
 */
import 'angular';
import 'ui-router';

/***
 * App config
 */
import config from './app.config';

/***
 * App modules
 */
import clientModule from './client/client.module';
import adminModule from './admin/admin.module';
import appController from './app.controller';
import footerDirective from './footer/footer.directive';

/**
 * Define application dependencies
 * @type {Array}
 */
let appDependencies = [
    'ui.router',
    clientModule,
    adminModule,
    appController,
    footerDirective
];

/**
 * Main app module
 * @type {angular.Module}
 */
let app = angular.module('app', appDependencies);

app.config(config);
