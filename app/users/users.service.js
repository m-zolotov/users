'use strict';

angular.module('Users')
    .factory('userService', function($http, $q){
        var usersList = undefined;
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
                        deferred.resolve(JSON.parse(JSON.stringify(usersList)));
                    },function error(response) {
                        deferred.reject(response.status);
                    });
                } else {
                    deferred.resolve(usersList);
                }

                return deferred.promise;
            },
            getUser: function(userID){
                var deferred = $q.defer();
                this.getData().
                then(function success(users) {
                    for (var i = 0; i < usersList.length; i++) {
                        if (usersList[i].id === userID) {
                            userDetail = usersList[i];
                            deferred.resolve(JSON.parse(JSON.stringify(userDetail)));
                            break;
                        }
                    }
                },function error(users) {
                    deferred.reject(users.status);
                });

                return deferred.promise;
            },
            saveUser: function(user){
                var deferred = $q.defer();
                this.getData().
                then(function success(users) {
                    for (var i = 0; i < usersList.length; i++) {
                        if (usersList[i].id === user.id) {
                            deferred.resolve(JSON.parse(JSON.stringify(user)));
                            break;
                        }
                    }
                },function error(users) {
                    deferred.reject(users.status);
                });

                return deferred.promise;

                /*var deferred = $q.defer();
                this.getData().
                then(function success(users) {
                    for (var i = 0; i < usersList.length; i++) {
                        if (usersList[i].id === userID) {
                            for (var key in usersList[i]) {
                                if (usersList[i][key] !== user[key]) {
                                    usersList[i][key] = user[key];
                                }
                            }
                            break;
                        }
                    }
                },function error(users) {
                    deferred.reject(users.status);
                });

                return deferred.promise;*/
            }
        }
    });