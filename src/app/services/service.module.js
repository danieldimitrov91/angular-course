import 'angular';

// import UserService from './user.service';

export default angular.module('app.services', [])
                // .factory('UserService', UserService)
                .factory('NewService', ['$http', function ($http) {
                    return {
                        http: $http
                    };
                }])
                .name;



