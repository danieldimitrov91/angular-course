import 'angular';
import config from './home.config';
import homeController from './home.controller';

let homeDependencies = [
    homeController,
];


export default angular.module('client.home', homeDependencies)
    .config(config).name;