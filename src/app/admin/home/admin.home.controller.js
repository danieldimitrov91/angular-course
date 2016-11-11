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
    vm.ui = {
        boardsLoading: true,
        modal: {
            show : false,
            title: '',
            item: ''
        }
    };

    activate();

    //////////////////////

    function activate() {
        userId = ProfileService.getProfile().id;
        BoardsService.getBoards({userId: userId}, successGetBoards, failGetBoards);
    }

    vm.confirmDelete = function (board) {
        console.log(board);
        vm.ui.modal.show = true;
        vm.ui.modal.title = board.name;
        vm.ui.modal.item = board;
        // vm.deleteBoard = vm.deleteBoard.bind(board);
    };
    vm.deleteBoard = function (item) {
        console.log(item);
        if (!item.deleting) {
            item.deleting = true;
            BoardsService.deleteBoard({
                userId: userId,
                boardId: item.id},
                successDeleteBoard.bind(item),
                failDeleteBoard.bind(item)
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
        vm.ui.boardsLoading = false;
    }
    function failGetBoards(response) {
        console.log('faild to get boards');
        vm.ui.boardsLoading = false;
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