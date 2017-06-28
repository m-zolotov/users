'use strict';

angular.module('Accordion')
    .factory('accordionService', function($http, $q){
        var productList = undefined;
        return{
            getData: function(){
                var deferred = $q.defer();
                if (productList === undefined) {
                    $http({
                        method: 'GET', url: './api/product.json'
                    }).
                    then (function success(response) {
                        productList = response.data;
                        deferred.resolve(JSON.parse(JSON.stringify(productList)));
                    },function error(response) {
                        deferred.reject(response.status);
                    });
                } else {
                    deferred.resolve(productList);
                }

                return deferred.promise;
            }
        }
    });