import 'angular';

import headerClient from './header.directive';
import HeaderController from './header.controller';

export default angular.module('client.header', [])
                .directive('headerClient', headerClient)
                // .controller('HeaderController', HeaderController)
                .name;