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

    $stateProvider.state("app.client", {
        abstract: true,
       	template: '<div ui-view="client" class="page-wrapper"></div>'
    });
}