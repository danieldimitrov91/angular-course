/***
 * Libraries
 */
import 'angular';
import LogoutSuccessController from './logout-success.controller';

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
                controller: LogoutSuccessController,
                controllerAs: 'vm',
        		template: template,
        	}
        },
        params: {
            requireLogin: true
        }
    });

}