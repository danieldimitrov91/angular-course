import 'angular';

import template from './footer.tpl.html';

export default angular.module('app.footer', [])
                .directive('mainFooter', mainFooter).name;

function mainFooter() {

    let directive = {
        scope: {},
        restrict: 'A',
        template: template,
        replace: true
    };

    return directive;
}
