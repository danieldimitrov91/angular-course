import 'angular';

LoginController.$inject = ['$scope'];

function LoginController($scope) {

    var vm = this;

    vm.title = 'Login Controller';
    $scope.$parent.title = vm.title;
    console.log(vm.title);
}

export default LoginController;