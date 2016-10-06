import 'angular';
import template from './header.tpl.html';

headerClient.$inject = [];

export default angular.module('client.directives', [])
				.directive('headerClient', headerClient).name;

function headerClient () {

    var directive = {
        restrict: 'A',
        template: template,
        replace: true,
        link: function (skope, elem, attrs) {
            elem.bind('click', function () {
                document.querySelector('h1').innerHTML += 'Welcome mother fucker';
            })
        },
        compile: function () {
            return  function () {
                $(".button-collapse").sideNav();
            }
        }
    };

    return directive;
};