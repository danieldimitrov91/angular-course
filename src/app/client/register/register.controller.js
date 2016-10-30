import 'angular';

RegisterController.$inject = ['$scope', '$state', 'UserService', 'filterByFilter', 'ProfileService'];

function RegisterController($scope, $state, UserService, filterBy, ProfileService) {

    var vm = this;
    vm.title = 'Register Controller';
    $scope.$parent.title = vm.title;

    vm.userData = {
        username: '',
        name: '',
        password: '',
        email: ''
    };

    vm.ui = {
        errors: {
            talen: false
        }
    };

    var users = [];

    activate();

    ///////////////////

    function activate() {
        UserService.getAllUsers({},
            function success (response) {
                users = response.result;
        });
    }

    vm.initiateRegister = function() {
        console.log('dasdasdas');
        console.log(vm.registerForm.$valid);
        if (vm.registerForm.$valid && !vm.ui.errors.taken) {
            console.log('YES');

            UserService.registerUser(vm.userData, registrationSuccess, registrationError);
        } else {
            console.log('NO');
        }

    };

    function registrationSuccess(response) {
        console.log(response);

        ProfileService.setProfile(response.result);
        $state.go('app.admin.home');

    }

    function registrationError() {
        console.erroe(response);
    }

    vm.checkUsername = function () {

        if (vm.registerForm.username.$valid) {

            if (filterBy(users, vm.userData.username)) {
                vm.ui.errors.taken = true;
                console.error(true);
            } else {
                vm.ui.errors.talen = false;
                console.log(false);
            }
        }
    };

}

export default RegisterController;