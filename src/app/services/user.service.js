import 'angular';

UserService.$inject = ['$resource', 'API_URL'];

function UserService($resource, API_URL) {
    var URL = API_URL + ':action',
        defaultParams = {
        action: '@action'
    };
    console.log('userService method');
    // console.log($resource);
    // console.log($http);


    return $resource(URL, defaultParams, {
        getAllUsers: {
            method: 'GET',
            params: {
                action: 'users'
            },
            isArray: false
        },
        registerUser: {
            method: 'POST',
            params: {
                action: 'users'
            },
            isArray: false
        }
    });
}
export default UserService;


