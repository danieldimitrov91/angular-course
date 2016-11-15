import 'angular';
import EditCardController from './edit.card.controller';
import template from './edit.card.tpl.html';

function editCardDirective() {

    let directive = {
        scope: {
            show: '=',
            title: '@',
            action: '&',
            item: '=',
            type: '@'
        },
        restrict: 'E',
        controller: EditCardController,
        controllerAs: 'vm',
        template: template,
        link: function (scope, attr) {

        }
    };

    return directive;
}

export default editCardDirective;