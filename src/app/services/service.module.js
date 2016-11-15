import 'angular';

import UserService from './user.service';
import BoardsService from './boards.service';
import CardsService from './card.service';
import loginInterceptor from './login.interceptor';
import Translations from './translation.service';
import sessionService from './session.service';

export default angular.module('app.services', [])
                .factory('UserService', UserService)
                .factory('BoardsService', BoardsService)
                .factory('CardsService', CardsService)
                .factory('loginInterceptor', loginInterceptor)
                .factory('Translations', Translations)
                .service('sessionService', sessionService)
                .name;


