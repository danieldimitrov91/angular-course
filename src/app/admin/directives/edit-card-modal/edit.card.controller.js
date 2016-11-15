EditCardController.$inject = ['$scope'];

function EditCardController($scope) {
    var vm = this;

    vm.cardData = {
        name: $scope.item.name
    };
    console.log(vm.cardData.name);
    console.log('EditCardController');

    $scope.completeAction = function () {

        var item = $scope.item,
            input = document.querySelector('.modal-input.edit-item');

        input.value = '';
        // item.newName = $scope.item.name;
        item.newName = vm.cardData.name;

        $scope.show = false;

        $scope.action({
            item: item
        });
    };

    $scope.hideModal = function () {
        $scope.show = false;
    }
}

export default EditCardController;