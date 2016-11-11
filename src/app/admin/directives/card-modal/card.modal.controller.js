export default cardModalController;

cardModalController.$inject = ['$scope'];

/* @ngInject */
function cardModalController($scope) {

    $scope.completeAction = function () {
        $scope.show = false;
        $scope.action({
            item: $scope.item
        });
    }
}