import 'angular';
import config from './login.config';
import LoginController from './login.controller';

export default angular.module('client.login', [])
    .config(config)
    .controller('LoginController', LoginController)
    .name;
// var login = angular.module('client.login', []).config(config).name;
//
// 			login.controller('logController', ['$scope', function($scope) {
// 				$scope.greeting = 'Hola!';
// 			}]);
//
// 			export default login