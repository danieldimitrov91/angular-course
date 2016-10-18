import 'angular';

RegisterController.$inject = ['$scope'];

function RegisterController($scope) {

    var vm = this;
    vm.title = 'Register Controller';
    $scope.$parent.title = vm.title;
}

export default RegisterController;