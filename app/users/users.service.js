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
                this.getData().
                then(function success(users) {
                    for (var i = 0; i < usersList.length; i++) {
                        if (usersList[i].id === user) {
                            userDetail = usersList[i];
                            deferred.resolve(userDetail);
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
                    console.log(user);
                    /*for (var i = 0; i < usersList.length; i++) {
                        if (usersList[i].id === user.id) {
                            //for (var i = 0; i < usersList.length; i++)
                            console.log ('usersList[i]', [i], usersList[i]);
                        }
                    }*/
                },function error(users) {
                    deferred.reject(users.status);
                });

                return deferred.promise;
            }
        }
    });