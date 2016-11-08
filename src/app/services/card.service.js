import 'angular';

CardsService.$inject = ['$resource', 'API_URL'];

function CardsService($resource, API_URL) {
    var URL = API_URL + 'users/:userId/boards/:boardId/:action/:cardId',
        defaultParams = {
            userId: '@userId',
            action: '@action',
            boardId: '@boardId',
            cardId: '@cardId'
        };
    console.log('BoardService method');

    return $resource(URL, defaultParams, {
        getCards: {
            method: 'GET',
            params: {
                action: 'cards'
            },
            isArray: false
        },
        deleteCard: {
            method: 'DELETE',
            params: {
                action: 'cards'
            },
            isArray: false
        },
        getCard: {
            method: 'GET',
            params: {
                action: 'cards'
            },
            isArray: false
        },
        createCard: {
            method: 'POST',
            params: {
                action: 'cards'
            },
            isArray: false
        },

    });
}


export default CardsService;






