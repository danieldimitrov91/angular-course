/***
 * Libraries
 */
import 'angular';
import 'angular-materialize';
import 'ui-router';
import 'ng-resource';

/***
 * App config
 */
import config from './app.config';

/***
 * App modules
 */
import clientModule from './client/client.module';
import adminModule from './admin/admin.module';
import appController from './app.controller';
import footerDirective from './footer/footer.directive';
import servicesModule from './services/service.module';

/**
 * Define application dependencies
 * @type {Array}
 */
let appDependencies = [
    'ui.router',
    'ngResource',
    'ui.materialize',

    servicesModule,

    clientModule,
    adminModule,
    appController,
    footerDirective
];

/**
 * Main app module
 * @type {angular.Module}
 */
let app = angular.module('app', appDependencies);

app.config(config)
    .run(appRun);

appRun.$inject = ['$rootScope', '$state'];

function appRun($rootScope, $state) {

    $rootScope.loggedIn = false;
    $rootScope.$on('$stateChangeStart', handleStateChange);


    function handleStateChange(evnt, toState, toParams, fromState, fromParams, options) {
        console.log(toState);
        if($rootScope.loggedIn === toState.params.requireLogin) {

        } else {

            evnt.preventDefault();

            if($rootScope.loggedIn) {
                $state.go('app.admin.home');
            } else {
                $state.go('app.client.home');
            }
        }
    }
}

