import 'angular';
import _ from 'underscore';

AdminHomeController.$inject = ['BoardsService', 'ProfileService'];

export default AdminHomeController;

function AdminHomeController(BoardsService, ProfileService) {

    var vm = this;

    vm.title = 'Board Controller';

    activate();
    //////////////////////

    function activate() {

    }


}