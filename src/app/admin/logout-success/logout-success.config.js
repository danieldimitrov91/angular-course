/***
 * Libraries
 */
import 'angular';

/***
 * Configure Home module
 **/
import template from './logout-success.tpl.html';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.admin.logout-success", {
        url: "/logout-success",
        views: {
            admin: {
        		template: template
        	}
        }
    });
}