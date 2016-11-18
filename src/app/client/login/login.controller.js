import {namespace,translations} from './login.translations';

LoginController.$inject = ['$scope', '$state', 'UserService', 'filterByUPFilter', 'ProfileService', 'Translations', '$translate'];

function LoginController($scope, $state, UserService, filterByUP, ProfileService, Translations, $translate) {


    var vm = this,
        users = [];

    vm.title = 'Login Controller';
    $scope.$parent.title = vm.title;
    console.log(vm.title);
    vm.userData = {
        username: '',
        password: ''
    };
    vm.translations = {};

    activate();

    $scope.$on('change:lang', getTranslations);

    ///////////////

    function activate() {
        UserService.getAllUsers({},
            function success(response) {
                users = response.result;
            }, function error(response) {
        });

        getTranslations();
    }

    vm.initiateLogin = function () {
        if(vm.loginForm.$valid) {

            var userData = filterByUP(users, vm.userData);

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

    function getTranslations() {
        Translations.executeTranslations(namespace,translations).then(function (translations) {
            vm.translations = translations;
        });
    }
}

export default LoginController;