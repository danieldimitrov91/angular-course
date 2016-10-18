/***
 * Libraries
 */
import 'angular';

/***
 * Configure Home module
 **/
import template from './register.tpl.html';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.client.register", {
        url: "/register",
        views: {
        	client: {
        	    controller: 'RegisterController',
        	    controllerAs: 'vm',
        		template: template
        	}
        },
        params: {
            requireLogin: false
        }
    });
}