import 'angular';

AdminHomeController.$inject = ['BoardsService', 'ProfileService'];

export default AdminHomeController;

function AdminHomeController(BoardsService, ProfileService) {

    var vm = this;
    vm.title = 'Admin Home Controller';

    vm.boards = [];

    var userId;

    activate();

    //////////////////////

    function activate() {
        userId = ProfileService.getProfile().id;
        BoardsService.getBoards({userId: userId}, successGetBoards, failGetBoards);
        console.log(userId);
    }

    function successGetBoards(response) {
        vm.boards = response.result;
        console.log(response);
    }
    function failGetBoards(response) {
        console.log('faild to get boards');
    }
}