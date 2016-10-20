import 'angular';

import UserService from './user.service';
import loginInterceptor from './login.interceptor';

export default angular.module('app.services', [])
                .factory('UserService', UserService)
                .factory('loginInterceptor', loginInterceptor)
                .name;