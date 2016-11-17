import 'angular';

HomeConfigController.$inject = ['$scope'];

function HomeConfigController($scope) {

    var vm = this;

    vm.title = 'Home controler';
    $scope.title2 = 'Home title 2';
    $scope.$parent.title = vm.title;

    console.log('HomeConfigController inside');
    console.log($scope.$parent);
    function changeCurrentLanguage() {

    }

}

export default HomeConfigController;