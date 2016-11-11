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
import headerDirective from './header/header.directive';
import boardModule from './boards/board.module';
import modalDirective from './directives/admin.directives';


/**
 * Define application dependencies
 * @type {Array}
 */
let adminDependencies = [
    homeModule,
	logoutSuccessModule,
    headerDirective,
    boardModule,
    modalDirective
];






/**
 * Main app module
 * @type {angular.Module}
 */
export default angular.module('app.admin', adminDependencies).config(config).name;