import 'angular';
import config from './home.config';

import HomeConfigController from './home.controller';

// let homeDependencies = [
//     homeController
// ];


export default angular.module('client.home', [])
    .controller('HomeConfigController', HomeConfigController)
    .config(config)
    .name;