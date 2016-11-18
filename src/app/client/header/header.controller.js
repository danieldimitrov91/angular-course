import 'angular';
import {namespace,translations} from './header.translations';

HeaderController.$inject = ['$scope', '$rootScope', 'Translations'];

function HeaderController($scope, $rootScope, Translations) {

    var vm = this;

    vm.headerTitle = 'header Title';
    console.log('header controller inside');
    vm.color = 'background-color:red;';
    vm.translations = {};

    getTranslations();

    $scope.$on('change:lang', getTranslations);

    vm.changeLanguage = function (lang) {
        Translations.changeLang(lang);
        $rootScope.$broadcast('change:lang');
    };

    function getTranslations() {
        console.log(namespace, translations);
        Translations.executeTranslations(namespace,translations).then(function (translations) {
            vm.translations = translations;
        });
    }

}



export default HeaderController;