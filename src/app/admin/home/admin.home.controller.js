import 'angular';
import _ from 'underscore';

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

    vm.deleteBoard = function (board) {
        if (!board.deleting) {
            board.deleting = true
            BoardsService.deleteBoard({
                userId: userId,
                boardId: board.id},
                successDeleteBoard.bind(board),
                failDeleteBoard.bind(board)
            );
        }
    };

    function successGetBoards(response) {
        vm.boards = response.result;
        console.log(response);
    }
    function failGetBoards(response) {
        console.log('faild to get boards');
    }

    function successDeleteBoard(response) {
        console.log(response);
        vm.boards = _.reject(vm.boards, this);
    }
    function failDeleteBoard(response) {

    }
}