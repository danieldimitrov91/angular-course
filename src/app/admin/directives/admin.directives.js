import 'angular';
import modalDirective from './confirm-modal/modal.directive';
import cardModalDirective from './card-modal/card.modal.directive';
import editCardDirective from './edit-card-modal/edit.card.directive';

export default angular.module('app.admin.directives', [])
    .directive('modalDirective', modalDirective)
    .directive('cardModalDirective', cardModalDirective)
    .directive('editCardDirective', editCardDirective)
    .name;