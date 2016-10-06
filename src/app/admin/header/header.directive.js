import 'angular';
import template from './header.tpl.html';

headerAdmin.$inject = [];

export default angular.module('admin.directives', [])
    .directive('headerAdmin', headerAdmin).name;

function headerAdmin () {

    var directive = {
        restrict: 'A',
        template: template,
        replace: true
    };

    return directive;
};