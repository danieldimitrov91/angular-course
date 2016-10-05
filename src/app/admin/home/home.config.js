/***
 * Libraries
 */
import 'angular';

/***
 * Configure Home module
 **/
import template from './home.tpl.html';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.admin.home", {
        url: "/home-admin",
        views: {
        	admin: {
        		template: template
        	}
        }
    });
}