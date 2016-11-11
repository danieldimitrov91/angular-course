export default modalController;

modalController.$inject = ['$scope'];

/* @ngInject */
function modalController($scope) {

    $scope.completeAction = function () {
        $scope.show = false;
        $scope.action({
            item: $scope.item
        });
    }
}