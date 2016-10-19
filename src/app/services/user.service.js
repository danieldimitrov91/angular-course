import 'angular';

UserService.$inject = ['$http'];

function UserService($http) {
    var URL = 'http://57e0fb4e4ed1d8110064d494.mockapi.io/api/v1/users',
        defaultParams = {
        action: '@action'
    };
    console.log('userService method');
    // console.log($resource);
    console.log($http);



    // $http({
    //     method: 'GET',
    //     url: URL
    // }).then(function successCallback(response) {
    //     // this callback will be called asynchronously
    //     // when the response is available
    //     console.log(response);
    // }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    //     console.log(response);
    // });

    // return $resource(URL, defaultParams, {
    //
    //     authenticateUser: {
    //         method: 'GET',
    //         params: {
    //             action: 'users'
    //         },
    //         isArray: true
    //     }
    // });
}
export default UserService();


