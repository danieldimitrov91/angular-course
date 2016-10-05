import 'angular';

/***
 * App config
 */
import config from './admin.config';

/***
 * App modules
 */
import homeModule from './home/home.module';
import logoutSuccessModule from './logout-success/logout-success.module';


/**
 * Define application dependencies
 * @type {Array}
 */
let adminDependencies = [
    homeModule,
	logoutSuccessModule
];


/**
 * Main app module
 * @type {angular.Module}
 */
export default angular.module('app.admin', adminDependencies).config(config).name;