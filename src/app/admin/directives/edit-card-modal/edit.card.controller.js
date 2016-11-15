EditCardController.$inject = ['$scope'];

function EditCardController($scope) {
    var vm = this;

    vm.cardData = {
        name: ''
    };
    console.log(vm.cardData.name);
    console.log('EditCardController');

    $scope.completeAction = function () {

        var item = $scope.item,
            input = document.querySelector('.modal-input.edit-item');

        input.value = '';
        item.newName = vm.cardData.name;

        $scope.show = false;

        $scope.action({
            item: item
        });
    };
}

export default EditCardController;