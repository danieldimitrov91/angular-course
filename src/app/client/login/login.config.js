/***
 * Libraries
 */
import 'angular';

/***
 * Configure Home module
 **/
import template from './login.tpl.html';
import LoginController from './login.controller';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.client.login", {
        url: "/login?x1&x2",
        views: {
        	client: {
                controller: LoginController,
                controllerAs: 'vm',
        		template: template
        	}
        },
        params: {
            requireLogin: false
        }
    });
}