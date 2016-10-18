import 'angular';
import UserService from './user.service';

export default angular.module('client.services', [])
                .factory('UserService', UserService)
                .name;