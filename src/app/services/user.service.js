import 'angular';

UserService.$inject = ['$resource'];

function UserService($resource) {
    var URL = 'http://57e0fb4e4ed1d8110064d494.mockapi.io/api/v1/:action',
        defaultParams = {
        action: '@action'
    };
    console.log('userService method');
    // console.log($resource);
    // console.log($http);


    return $resource(URL, defaultParams, {
        authenticateUser: {
            method: 'GET',
            params: {
                action: 'users'
            },
            isArray: false
        }
    });
}
export default UserService;


