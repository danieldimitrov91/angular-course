/***
 * Libraries
 */
import 'angular';

/***
 * Configure Home module
 **/
import template from './board.tpl.html';
import BoardController from './board.controller';

export default config;

config.$inject = ['$stateProvider'];

function config ($stateProvider) {

    $stateProvider.state("app.admin.board", {
        url: "/board",
        views: {
            admin: {
                controller: BoardController,
                controllerAs: 'vm',
                template: template
            }
        },
        params: {
            requireLogin: true
        }
    });
}