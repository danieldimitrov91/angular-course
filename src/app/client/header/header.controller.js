import 'angular';

//
//
// export default angular.module('app.client.controller',[])
//     .controller('HeaderTitleController', HeaderTitleController).name;

HeaderController.$inject = ['$scope'];

function HeaderController($scope) {

    var vm = this;

    vm.headerTitle = 'header Title';
    console.log('header controller inside');
    // document.addEventListener('$destroy', function () {
    //     console.log('header client destroy method on');
    // });
}

export default HeaderController;