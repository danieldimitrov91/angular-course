import 'angular';
import config from './board.config';

export default angular.module('app.admin.board', [])
    .config(config).name;