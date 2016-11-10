import 'angular';
import template from 'modal.tpl.html';
import modalController from 'modal.controller';

modalDirective.$inject = [];

function modalDirective() {

    let directive = {
        scope: {
            show: '=',
            title: '@',
            action: '&'
        },
        restrict: 'E',
        controller: modalController,
        template: template,
        replace: true
    };

    return directive;
}

export default modalDirective;