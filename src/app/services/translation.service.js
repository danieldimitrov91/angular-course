import 'angular';

import {commonTranslations, errorsTranslations} from '../app.translations';

Translations.$inject = ['$translate', '$q'];
// Translations.$inject = [];

function Translations($translate, $q) {
// function Translations() {

    // return {
    //   a: 1
    // };

    return {

        executeTranslations: function (keysArray) {
            return $q.all([
                $translate(commonTranslations),
                $translate(errorsTranslations),
                $translate(keysArray)
            ]).then(function combineTranslations(translations) {
                var pageTranslations = translations[2];

                pageTranslations.common = translations[0];
                pageTranslations.error= translations[1];

                return pageTranslations;
            });
        }
    }



}

export default Translations;