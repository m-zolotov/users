'use strict';

angular.module('Users')
    .factory('userService', function($http, $q){
        var usersList = undefined;
        var selectedID = undefined;
        var userDetail = undefined;
        return{
            getData: function(){
                var deferred = $q.defer();

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
                var deferred = $q.defer();

                if (usersList === undefined) {
                    $http({
                        method: 'GET', url: './api/users.json'
                    }).
                    then (function success(response) {
                        usersList = response.data;
                        if (selectedID !== user) {
                            selectedID = user;
                            for (var i = 0; i < usersList.length; i++) {
                                if (usersList[i].id === selectedID) {
                                    userDetail = usersList[i];
                                }
                                break;
                            }
                        } else {
                            for (var i = 0; i < usersList.length; i++) {
                                if (usersList[i].id === selectedID) {
                                    userDetail = usersList[i];
                                }
                                break;
                            }
                        }
                        deferred.resolve(userDetail);
                    },function error(response) {
                        deferred.reject(response.status);
                    });
                } else if (usersList !== undefined) {
                    for (var i = 0; i < usersList.length; i++) {
                        if (usersList[i].id === selectedID) {
                            userDetail = usersList[i];
                        }
                        break;
                    }
                    deferred.resolve(userDetail);
                } else {
                    deferred.resolve(userDetail);
                }

                return deferred.promise;
                /**/
            }
        }
    });