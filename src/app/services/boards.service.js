import 'angular';

BoardsService.$inject = ['$resource', 'API_URL'];

function BoardsService($resource, API_URL) {
    var URL = API_URL + 'users/:userId/:action/:boardId',
        defaultParams = {
            userId: '@userId',
            action: '@action',
            boardId: '@boardId'
        };
    console.log('BoardService method');

    return $resource(URL, defaultParams, {
        getBoards: {
            method: 'GET',
            params: {
                action: 'boards'
            },
            isArray: false
        },
        deleteBoard: {
            method: 'DELETE',
            params: {
                action: 'boards'
            },
            isArray: false
        },
        getBoard: {
            method: 'GET',
            params: {
                action: 'boards'
            },
            isArray: false
        },
        deleteBoard: {
            method: 'DELETE',
            params: {
                action: 'boards'
            },
            isArray: false
        },
        createBoard: {
            method: 'POST',
            params: {
                action: 'boards'
            },
            isArray: false
        },

    });
}
export default BoardsService;


