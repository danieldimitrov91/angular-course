import 'angular';
import _ from 'underscore';

AdminHomeController.$inject = ['$state', 'BoardsService', 'ProfileService', 'CardsService'];

export default AdminHomeController;

function AdminHomeController($state, BoardsService, ProfileService, CardsService) {

    var vm = this,
        userId = null,
        boardId = null;

    vm.title = 'Board Controller';
    vm.board = [];
    vm.cardData = {
        name: ''
    };

    activate();

    //////////////////////

    // console.log($state.params);
    function activate() {
        userId = ProfileService.getUserId();
        boardId = $state.params.id;
        // BoardsService.getBoards({userId})

        if ($state.params.board) {
            vm.board = $state.params.board;
        } else {
            BoardsService.getBoard({
                    userId: userId,
                    boardId: $state.params.id
                },
                successGetBoard, failGetBoard
            )
        }
    }

    function getCurrentBoard() {
        BoardsService.getBoard({userId: userId, boardId: boardId}, successGetBoard, failGetBoard);
    }

    vm.createCard = function () {
        var modal = document.querySelector('.modal.open'),
            backShadow = document.querySelector('.lean-overlay'),
            emptyInput = document.querySelector('.modal-input');

        document.body.removeChild(backShadow);
        emptyInput.value = '';
        modal.classList.remove('open');
        modal.removeAttribute('style');


        console.log('card created', vm.cardData.name);
        CardsService.createCard({
            name: vm.cardData.name,
            userId: userId,
            boardId: boardId
        }, successCreateCard, failCreateCard);
    };

    vm.deleteCard = function (card) {
        console.log('card deleted');
        console.log(card);
        CardsService.deleteCard({
            userId: userId,
            boardId: boardId,
            cardId: card.id},
            successDeleteCard, failDeleteCard
        );
    };

    function successCreateCard(response) {
        vm.board = response.result;
        getCurrentBoard();
        // BoardsService.getBoard({userId: userId, boardId: boardId}, successGetBoard, failGetBoard);
    }

    function failCreateCard(response) {
        console.log('No Cards');
    }

    function successGetBoard(response) {
        vm.board = response.result;
    }

    function failGetBoard(response) {
        console.log('No Cards');
    }

    function successDeleteCard(response) {
        // vm.board = response.result;
        console.log(response);
        getCurrentBoard();
    }

    function failDeleteCard(response) {
        console.log('No Cards');
    }
}