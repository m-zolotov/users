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
            getUser: function(userID){
                var deferred = $q.defer();
                this.getData().
                then(function success(users) {
                    for (var i = 0; i < usersList.length; i++) {
                        if (usersList[i].id === userID) {
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
            saveUser: function(user, userID){
                var deferred = $q.defer();
                this.getData().
                then(function success(users) {
                    for (var i = 0; i < usersList.length; i++) {
                        if (usersList[i].id === userID) {
                            //console.log ('user', usersList[i], Object.keys(usersList[i]));
                            //console.log ('user', usersList[i]);
                            for (var key in usersList[i]) {
                                if (usersList[i][key] !== user[key]) {
                                    usersList[i][key] = user[key];
                                    console.log ('user[i][key]', usersList[i].key);
                                }
                            }
                            /*for (var a = 0; a < Object.keys(usersList[i]).length; a++) {
                                //console.log ('user2', Object.keys(usersList[i])[a]);
                                if (Object.keys(usersList[i])[a] !== user[a]) {
                                    //usersList[i][a] = user[a];
                                    //console.log ('saveUsersList', Object.keys(usersList[i])[a]);
                                }
                            }*/
                            break;
                        }
                    }
                },function error(users) {
                    deferred.reject(users.status);
                });

                return deferred.promise;
            }
        }
    });