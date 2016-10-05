/***
 * Libraries
 */
import 'angular';

/***
 * Configure Main module
 **/

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.admin", {
        abstract: true,
       	template: '<div ui-view="admin" class="page-wrapper"></div>'
    });
}