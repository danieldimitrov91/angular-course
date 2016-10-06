import 'angular';

/***
 * App config
 */
import config from './client.config';

/***
 * App modules
 */
import homeModule from './home/home.module';
import loginModule from './login/login.module';
import registerModule from './register/register.module';
import headerDirective from './header/header.directive';
import headerController from './header/header.controller';


/**
 * Define application dependencies
 * @type {Array}
 */
let clientDependencies = [
    homeModule,
	loginModule,
	registerModule,
	headerDirective,
	headerController
];

/**
 * Main app module
 * @type {angular.Module}
 */
export default angular.module('app.client', clientDependencies).config(config).name;