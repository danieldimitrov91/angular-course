import 'angular';
import _ from 'underscore';

export default angular.module('app.filters.filterBy', [])
                .filter('filterBy', [function () {
                    function filterByEmail (collection, search) {
                        console.log(collection, search);
                        var result = _.findWhere(collection, {
                            email: search
                        });
                        console.log(result);
                        return result ? true : false;
                    }
                    function filterByEmailandPassword (collection, email, password) {
                        console.log(collection, email, password);
                        var result = _.findWhere(collection, {
                            email: email,
                            password: password
                        });
                        console.log(result);
                        return result ? true : false;
                    }

                    return {
                        filterByEmail: filterByEmail,
                        filterByEmailandPassword: filterByEmailandPassword
                    }
                }])
                .name;


