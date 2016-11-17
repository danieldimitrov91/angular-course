// import 'angular';

export default angular.module('app.controller', [])
                .controller('initFunctions', initFunctions).name;

initFunctions.$inject = ['$scope', '$translate'];

function initFunctions($scope, $translate) {

    this.title = 'App Controller';

    $scope.news = {
        one: 'Best news ever!',
        two: 'Best news ever! 2'
    };

    $scope.changeLanguage = function (language) {
        // $translate.use(language);
        return 'changeLanguage';
    };
}




