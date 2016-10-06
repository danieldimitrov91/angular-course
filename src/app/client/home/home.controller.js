import 'angular';

export default angular.module('client.home.controller',[])
                .controller('checkCtrl', ['$scope', function($scope) {
                    $scope.greeting = 'Hola!';
                }]).name;