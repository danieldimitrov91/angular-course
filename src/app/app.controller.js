// import 'angular';

export default angular.module('app.controller', [])
                .controller('initFunctions', ['$scope', function($scope) {
                    $scope.news = {
                        one: 'Best news ever!',
                        two: 'Best news ever! 2'
                    };
                }]).name;






