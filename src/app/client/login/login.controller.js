LoginController.$inject = ['$scope', '$rootScope', '$state', 'UserService', 'filterByFilter'];

function LoginController($scope, $rootScope, $state, UserService, filterBy) {

    var vm = this;

    vm.title = 'Login Controller';
    $scope.$parent.title = vm.title;
    console.log(vm.title);

    vm.userData = {
        email: '',
        password: ''
    };

    vm.checkFields = {
        checkEmail: false,
        checkPassword: false
    };
    vm.initiateLogin = function () {
    // console.log(filterBy.filterByEmailandPassword(['dasdas'], 'dasdas'));
        if(vm.loginForm.$valid && vm.checkFields.checkEmail && vm.checkFields.checkPassword) {
            console.log('YES');

            // $state.go('app.admin.home');
            console.log($rootScope.loggedIn);

            UserService.authenticateUser({},
                function success (response){
                    console.log(response);
                    if (response.status === 200) {

                        if (filterBy.filterByEmailandPassword(response.result, vm.userData.email ,vm.userData.password)) {
                            console.log('Logged in');
                            $rootScope.loggedIn = true;
                            $state.go('app.admin.home');
                        } else {
                            console.log('Not Logged in');
                        for(var i = 0; i < response.result.length; i++) {

                            if (response.result[i].email === vm.userData.email && response.result[i].password === vm.userData.password) {
                                console.log('MATCH');
                                // password 1
                                $rootScope.loggedIn = true;
                                console.log('app.admin.home');
                                $state.go('app.admin.home');

                                break;

                            } else {
                                console.log('DONT MATCH');
                            }
                        }
                    }
                }, function error (response) {

                    console.error(response);
                });

        }else {
            console.log('NO');
        }
        console.log(vm.loginForm);
        console.log(vm.userData);
    };

    vm.checkUser = function () {
        console.log('blur in');
        console.log(vm.userData);

        if (vm.userData.email !== undefined && vm.userData.email.length > 5) {
            vm.checkFields.checkEmail = true;
            //TODO send ajax and check the user
        } else {
            console.log('iok');
        }
    };

    vm.checkPassword = function () {

        if (vm.userData.password.length > 7) {
            console.log('password ok');
            vm.checkFields.checkPassword = true;
        } else {
            console.log('pass wrong');
        }
    };
}

export default LoginController;