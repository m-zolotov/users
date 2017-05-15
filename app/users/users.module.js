'use strict';

// Declare app level module which depends on views, and components

angular.module('usersModule', ['ngRoute'])
/*
angular.module('usersModule', [
    'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}])*/

.factory('UserService', function($http, $q){
    var userList = undefined;
    return{
        getData: function(){
            var deferred = $q.defer();

            if (userList === undefined) {
                $http({
                    method: 'GET', url: './api/users.json'
                }).
                then (function success(response) {
                        userList = response.data;
                        deferred.resolve(userList);
                    },function error(response) {
                        deferred.reject(response.status);
                    }
                );
            } else {
                deferred.resolve(userList);
            }

            return deferred.promise;
        }
    }
});
