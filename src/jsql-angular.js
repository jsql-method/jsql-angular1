/**
 * JSQL Module for AngularJS
 *
 */
(function (angular) {
    'use strict';

    angular
        .module('jsql-angular', [])
        .provider('jsql', jsql);

    /**
     * @ngInject
     */
    function jsql() {

        var _jsql = null;
        var config = null;

        this.setConfig = function (jsqlConfig) {
            config = jsqlConfig;
        };

        this.$get = ["$http", function unicornLauncherFactory($http) {

            if(_jsql == null){
                jsqlOverride($http);
                _jsql = new JSQL(config);
            }

            return _jsql;

        }];

    }

    function jsqlOverride($http) {

        /**
         * Override @request function
         * @param requestUrl
         * @param requestData
         * @param requestHeaders
         * @returns promise
         */
        JSQL.prototype.request = function (requestUrl, requestData, requestHeaders) {

            return $http({
                url: requestUrl,
                method: 'POST',
                dataType: 'json',
                headers: requestHeaders,
                data: requestData
            });

        };

        /**
         * Overridie @wrap function
         * @param token
         * @param queryType
         * @returns promise
         */
        JSQL.prototype.wrap = function (token, queryType) {

            return this.construct(token, queryType, {
                successName: 'then',
                errorName: 'catch',
                alwaysName: 'finally'
            });

        };

    }

})(angular);
