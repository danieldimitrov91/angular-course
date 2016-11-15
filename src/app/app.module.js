/***
 * Libraries
 */
import 'angular';
import 'angular-materialize';
import 'ui-router';
import 'ng-resource';
import 'ng-storage';
import 'angular-cookies';
import 'ng-translate';
import 'ng-translate-loader';
import 'ng-translate-local';
import 'ng-translate-cookie';

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
import appFilters from './filters/app.filters';
import appProviders from './providers/app.provider';
import appConstants from './constants/app.constants';

/**
 * Define application dependencies
 * @type {Array}
 */
let appDependencies = [
    'ui.router',
    'ngResource',
    'ngStorage',
    'ui.materialize',
    'ngStorage',
    'ngCookies',
    'pascalprecht.translate',

    servicesModule,
    appProviders,
    appConstants,
    appFilters,

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

appRun.$inject = ['$rootScope', '$state', 'ProfileService'];

function appRun($rootScope, $state, ProfileService) {

    $rootScope.$on('$stateChangeStart', handleStateChange);


    function handleStateChange(evnt, toState, toParams, fromState, fromParams, options) {
        // console.log(toState);

        if(ProfileService.isLoggedIn() !== toState.params.requireLogin) {

            evnt.preventDefault();

            if(ProfileService.isLoggedIn()) {
                $state.go('app.admin.home');
            } else {
                $state.go('app.client.home');
            }
        }
    }
}
