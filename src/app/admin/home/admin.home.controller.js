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
        },
        editModal: {
            show : false,
            title: '',
            item: ''
        }
    };

    activate();

    //////////////////////

    function activate() {
        userId = ProfileService.getProfile().id;
        getAllBoards();
    }

    function getAllBoards() {
        BoardsService.getBoards({userId: userId}, successGetBoards, failGetBoards);
    }

    vm.showBoardDetails = function (board, type) {
        console.log(board);

        if (type === 'delete') {
            vm.ui.modal.show = true;
            vm.ui.modal.title = board.name;
            vm.ui.modal.item = board;
        } else if (type === 'edit') {
            vm.ui.editModal.show = true;
            vm.ui.editModal.title = board.name;
            vm.ui.editModal.item = board;
        }
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

    vm.updateBoard = function (item) {
        console.log(item);
        if (!item.updating) {
            item.updating = true;
            BoardsService.updateBoard({
                userId: userId,
                boardId: item.id,
                name: item.newName},
                successUpdateBoard.bind(item),
                failUpdateBoard.bind(item)
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
        getAllBoards();

    }
    function failCreateBoard(response) {

    }
    function successUpdateBoard(response) {
        getAllBoards();
    }
    function failUpdateBoard(response) {

    }
}