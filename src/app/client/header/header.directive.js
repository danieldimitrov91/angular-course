import 'angular';
import template from './header.tpl.html';

headerClient.$inject = [];

// export default angular.module('client.directives', [])
// 				.directive('headerClient', headerClient).name;

import HeaderController from './header.controller';

headerClient.$inject = [];

function headerClient () {

    var directive = {
        restrict: 'A',
        template: template,
        replace: true,
        controller: HeaderController,
        controllerAs: 'vm',
        // scope: {
        //     color: '@colorAttr'
        // },
        link: function (scope, elem, attrs) {
            document.querySelector('.header-text').addEventListener('click', checkFunction);
            console.log(elem);
            console.log(attrs);
            // elem.on('click', checkFunction);
            elem.on('$destroy', function () {
                console.log('header client destroy method on');
                document.querySelector('.header-text').removeEventListener('click', checkFunction);
            });
        }
        // compile: function () {
        //     return  function () {
        //         $(".button-collapse").sideNav();
        //     }
        // }
    };

    function checkFunction() {
        document.querySelector('h1').innerHTML += 'Welcome mother fucker';
    }

    return directive;
}

export default headerClient;