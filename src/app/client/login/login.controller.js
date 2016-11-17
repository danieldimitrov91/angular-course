import {namespace,translations} from './login.translations';

LoginController.$inject = ['$scope', '$state', 'UserService', 'filterByUPFilter', 'ProfileService', 'Translations'];

function LoginController($scope, $state, UserService, filterByUP, ProfileService, Translations) {

    var vm = this;

    vm.title = 'Login Controller';
    $scope.$parent.title = vm.title;
    console.log(vm.title);
    var users = [];
    vm.userData = {
        username: '',
        password: ''
    };
    vm.translations = {};
    activate();

    ///////////////

    function activate() {
        UserService.getAllUsers({},
            function success(response) {
                users = response.result;
                console.log(response);
            }, function error(response) {
                console.log(response);
        });

        console.log(namespace, translations);
        Translations.executeTranslations(namespace,translations).then(function (translations) {
            vm.translations = translations;
            console.log(vm.translations);
        });
    }

    vm.initiateLogin = function () {
        if(vm.loginForm.$valid) {
            console.log('YES');
            var userData = filterByUP(users, vm.userData);
            console.log(userData);
            if (userData) {
                ProfileService.setProfile(userData);
                $state.go('app.admin.home');
            } else {
                console.log('Invalid login form error');
            }
        } else {
            console.log('NO');
        }
    };
}

export default LoginController;