/***
 * Libraries
 */
import 'angular';

/***
 * Configure Home module
 **/
import template from './login.tpl.html';

export default config;

config.$inject = ['$urlRouterProvider', '$stateProvider'];

function config ($urlRouterProvider, $stateProvider) {

    $stateProvider.state("app.client.login", {
        url: "/login?x1&x2",
        views: {
        	client: {
        		template: template
        	}
        }
    });
}