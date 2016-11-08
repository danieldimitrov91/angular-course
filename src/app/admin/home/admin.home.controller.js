import 'angular';
import _ from 'underscore';

AdminHomeController.$inject = ['BoardsService', 'ProfileService'];

export default AdminHomeController;

function AdminHomeController(BoardsService, ProfileService) {

    var vm = this;
    vm.title = 'Admin Home Controller';

    vm.boards = [];

    vm.boardData = {
        name: ''
    };

    var userId;

    activate();

    //////////////////////

    function activate() {
        userId = ProfileService.getProfile().id;
        BoardsService.getBoards({userId: userId}, successGetBoards, failGetBoards);
    }

    vm.deleteBoard = function (board) {
        if (!board.deleting) {
            board.deleting = true;
            BoardsService.deleteBoard({
                userId: userId,
                boardId: board.id},
                successDeleteBoard.bind(board),
                failDeleteBoard.bind(board)
            );
        }
    };

    vm.createBoard = function () {
        var modal = document.querySelector('.modal.open'),
            backShadow = document.querySelector('.lean-overlay'),
            emptyInput = document.querySelector('.modal-input');
        console.log(emptyInput);
        document.body.removeChild(backShadow);
        emptyInput.value = '';
        modal.classList.remove('open');
        modal.removeAttribute('style');



        BoardsService.createBoard({
            name: vm.boardData.name,
            userId: userId
        }, successCreateBoard, failCreateBoard);
    };

    function successGetBoards(response) {
        vm.boards = response.result;
    }
    function failGetBoards(response) {
        console.log('faild to get boards');
    }

    function successDeleteBoard(response) {
        vm.boards = _.reject(vm.boards, this);
    }
    function failDeleteBoard(response) {

    }
    function successCreateBoard(response) {
        BoardsService.getBoards({userId: userId}, successGetBoards, failGetBoards);

    }
    function failCreateBoard(response) {

    }
}