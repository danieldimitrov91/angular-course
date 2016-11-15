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
    vm.ui = {
        cardsLoading: false,
        modal: {
            show : false,
            title: '',
            item: ''
        },
        dataModal: {
            show: false,
            title: '',
            item: ''
        },
        editModal: {
            show: false,
            title: '',
            item: ''
        }
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

        CardsService.createCard({
            name: vm.cardData.name,
            userId: userId,
            boardId: boardId
        }, successCreateCard, failCreateCard);
    };

    vm.showCardDetails = function (card, type) {

        console.log('type = ' + type);

        if (type === 'delete') {
            vm.ui.modal.show = true;
            vm.ui.modal.title = card.name;
            vm.ui.modal.item = card;
        } else if (type === 'data') {
            vm.ui.dataModal.show = true;
            vm.ui.dataModal.title = card.name;
            vm.ui.dataModal.item = card;
        } else if (type === 'edit') {
            vm.ui.editModal.show = true;
            vm.ui.editModal.title = card.name;
            vm.ui.editModal.item = card;
            console.log(vm.ui.editModal);
        }

    };

    vm.deleteCard = function (card) {

        if(!card.deleting) {
            card.deleting = true;
            CardsService.deleteCard({
                userId: userId,
                boardId: boardId,
                cardId: card.id},
                successDeleteCard, failDeleteCard
            );
        }
    };

    vm.showCardDetailData = function (card) {
        console.log('show card details');
        console.log(card);
    };

    vm.editCardData = function (card) {
        console.log('edit card details');
        console.log(card);

        if(!card.editing) {
            card.editing = true;
            CardsService.updateCard({
                userId: userId,
                boardId: boardId,
                cardId: card.id,
                name: card.newName},
                successEditCard, failEditCard
            );
        }
    };


    function successCreateCard(response) {
        vm.board = response.result;
        getCurrentBoard();
        vm.ui.cardsLoading = false;
    }

    function failCreateCard(response) {
        vm.ui.cardsLoading = false;
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
        getCurrentBoard();
    }

    function failDeleteCard(response) {
        console.log('No Cards');
    }

    function successEditCard(response) {
        // vm.board = response.result;
        getCurrentBoard();
        console.log('card edited', response);
    }

    function failEditCard(response) {
        console.log('no edit card');
    }
}