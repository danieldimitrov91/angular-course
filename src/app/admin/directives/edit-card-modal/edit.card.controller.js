EditCardController.$inject = ['$scope'];

function EditCardController($scope) {
    var vm = this;

    vm.cardData = {
        name: '',
        flag: false
    };

    console.log('EditCardController');

    $scope.completeAction = function () {
        console.log($scope.item);
        var item = $scope.item;

        item.newName = $scope.item.name;

        $scope.show = false;
        vm.cardData.flag = false;

        $scope.action({
            item: item
        });
    };

    $scope.hideModal = function () {

        $scope.show = false;
        var input = document.querySelector('.modal-input.edit-item');
        $scope.item.name = vm.cardData.name;
        console.log($scope);
    };

    $scope.cacheItemName = function () {
        var inputValue = document.querySelector('.modal-input.edit-item').value;

        if(!vm.cardData.flag) {
            vm.cardData.flag = true;
            vm.cardData.name = inputValue;
            console.log(inputValue);
        }
    }
}

export default EditCardController;