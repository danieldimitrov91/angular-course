import 'angular';

export default angular.module('app.controller', [])
                .controller('initFunctions', ['$scope', 'NewService', function($scope, NewService) {
                    $scope.news = {
                        one: 'Best news ever!',
                        two: 'Best news ever! 2'
                    };

                    console.log(NewService);
                    var URL = 'http://57e0fb4e4ed1d8110064d494.mockapi.io/api/v1/users',
                        defaultParams = {
                            action: '@action'
                        };

                    NewService.http.get(URL)
                        .then(function(response) {
                        console.log(response.data);
                    })
                }]).name;








