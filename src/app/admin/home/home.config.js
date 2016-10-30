/***
 * Libraries
 */
import 'angular';

/***
 * Configure Home module
 **/
import template from './home.tpl.html';
import AdminHomeController from './admin.home.controller';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.admin.home", {
        url: "/home-admin",
        views: {
        	admin: {
                controller: AdminHomeController,
                controllerAs: 'vm',
        		template: template
        	}
        },
        params: {
            requireLogin: true
        }
    });
}