import 'angular';
import ProfileService from './profile.provider';

export default angular.module('app.provider', [])
    .provider('ProfileService', ProfileService)
    .name;