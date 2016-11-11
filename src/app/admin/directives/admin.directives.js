import 'angular';
import modalDirective from './confirm-modal/modal.directive';
import cardModalDirective from './card-modal/card.modal.directive';

export default angular.module('app.admin.directives', [])
    .directive('modalDirective', modalDirective)
    .directive('cardModalDirective', cardModalDirective)
    .name;


