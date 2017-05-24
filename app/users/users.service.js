'use strict';

angular.module('Users')
    .factory('userService', function($http, $q){
        var usersList = undefined;
        var userDetail = undefined;
        var deferred = $q.defer();
        return{
            getData: function(){
                if (usersList === undefined) {
                    $http({
                        method: 'GET', url: './api/users.json'
                    }).
                    then (function success(response) {
                        usersList = response.data;
                        deferred.resolve(usersList);
                    },function error(response) {
                        deferred.reject(response.status);
                    });
                } else {
                    deferred.resolve(usersList);
                }

                return deferred.promise;
            },
            getUser: function(user){
                this.getData().
                then(function(users) {
                    for (var i = 0; i < usersList.length; i++) {
                        if (usersList[i].id === user) {
                            userDetail = usersList[i];
                            break;
                        }
                    }
                    deferred.resolve(userDetail);
                    console.log('userDetail', userDetail);
                });
                return deferred.promise;

                /*var deferred = $q.defer();
                if (usersList === undefined) {
                    $http({
                        method: 'GET', url: './api/users.json'
                    }).
                    then (function success(response) {
                        usersList = response.data;
                        for (var i = 0; i < usersList.length; i++) {
                            if (usersList[i].id === user) {
                                userDetail = usersList[i];
                                break;
                            }
                        }
                        deferred.resolve(userDetail);
                    },function error(response) {
                        deferred.reject(response.status);
                    });
                } else if (usersList !== undefined) {
                    for (var i = 0; i < usersList.length; i++) {
                        if (usersList[i].id === user) {
                            userDetail = usersList[i];
                            break;
                        }
                    }
                    deferred.resolve(userDetail);
                } else {
                    deferred.resolve(userDetail);
                }*/
            }
        }
    });