import 'angular';
import template from './header.tpl.html';

headerClient.$inject = [];

export default angular.module('client.directives', [])
				.directive('headerClient', headerClient).name;

function headerClient () {

    var directive = {
        restrict: 'A',
        template: template,
        replace: true
    };

    return directive;
};