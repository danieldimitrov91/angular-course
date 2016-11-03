import 'angular';
import _ from 'underscore';

AdminHomeController.$inject = ['BoardsService', 'ProfileService'];

export default AdminHomeController;

function AdminHomeController(BoardsService, ProfileService) {

    var vm = this;
    vm.title = 'Board Controller';
    vm.boardData = {
        name: ''
    };
    activate();

    //////////////////////

    function activate() {

    }

    vm.createBoard = function () {
        console.log(vm.boardData.name);
        // TO DO Create Board
    }
}