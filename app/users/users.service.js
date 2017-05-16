'use strict';

usersApp.factory('userService', function($http, $q){
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