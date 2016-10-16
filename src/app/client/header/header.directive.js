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
        link: function (scope, elem, attrs) {
            // document.querySelector('.header-text').addEventListener('click', checkFunction);
            console.log(elem);
            elem.on('click', checkFunction);
            elem.on('$destroy', function () {
                console.log('header client destroy method on');
                // document.querySelector('.header-text').removeEventListener('click', checkFunction);
            });

            function checkFunction() {
                document.querySelector('h1').innerHTML += 'Welcome mother fucker';
            }
        },
        // compile: function () {
        //     return  function () {
        //         $(".button-collapse").sideNav();
        //     }
        // }
    };

    return directive;
};

export default headerClient;