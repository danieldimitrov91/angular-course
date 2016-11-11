import 'angular';
import template from './card.modal.tpl.html';
import cardModalController from './card.modal.controller';

cardModalDirective.$inject = [];

function cardModalDirective() {

    let directive = {
        scope: {
            show: '=',
            title: '@',
            action: '&',
            item: '='
        },
        restrict: 'E',
        controller: cardModalController,
        template: template
        // replace: true
    };

    return directive;
}

export default cardModalDirective;