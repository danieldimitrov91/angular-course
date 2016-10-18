import 'angular';

UserService.$inject = [];

function UserService() {
    var URL = 'http://57e0fb4e4ed1d8110064d494.mockapi.io/api/v1/users';
    var defaultParams = {
        action: '@action'
    };

    return $resource(URL, defaultParams, {

        authenticateUser: {
            method: 'GET',
            params: {
                action: 'users'
            },
            isArray: true
        }
    });
}
export default UserService;