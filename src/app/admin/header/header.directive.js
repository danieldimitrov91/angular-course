import 'angular';
import template from './header.tpl.html';

headerAdmin.$inject = ['$state', 'ProfileService'];

export default angular.module('admin.directives', [])
    .directive('headerAdmin', headerAdmin).name;

function headerAdmin ($state, ProfileService) {

    var directive = {
        restrict: 'A',
        template: template,
        replace: true,
        link: function (scope, elem, attr) {
            var logoutBtn = document.querySelector('.logout');

            logoutBtn.addEventListener('click', logoutFunc);

            elem.on('$destroy', function () {
                console.log('header admin destroy method on');
                logoutBtn.removeEventListener('click', logoutFunc);
            });
        }
    };

    function logoutFunc(e) {
        // e.preventDefault();
        console.log('logout');
        ProfileService.logoutUser();

        $state.go('app.client.login');
    }


    return directive;
};