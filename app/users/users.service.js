'use strict';

angular.module('Users')
    .factory('userService', function($http, $q){
        var usersList = undefined;
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
                var userDetail = undefined;
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
                function getMaxUserId(users) {
                    var maxID = 0;
                    for (var i = 0; i < users.length; i++) {
                        if (maxID < Number(users[i].id)) {
                            maxID = Number(users[i].id);
                        }
                    }
                    return ++maxID;
                }
                this.getData().
                then(function success(users) {
                    if (user.id === '-1') {
                        user.id = String(getMaxUserId(users));
                        usersList.push(user);
                        deferred.resolve(JSON.parse(JSON.stringify(user)));
                    } else {
                        for (var i = 0; i < usersList.length; i++) {
                            if (usersList[i].id === user.id) {
                                usersList[i].age = user.age;
                                usersList[i].name = user.name;
                                usersList[i].status = user.status;
                                usersList[i].about = user.about;
                                usersList[i].balance = user.balance;
                                usersList[i].gender = user.gender;
                                usersList[i].email = user.email;
                                usersList[i].phone = user.phone;
                                usersList[i].address = user.address;

                                deferred.resolve(JSON.parse(JSON.stringify(user)));
                                break;
                            }
                        }
                    }
                },function error(users) {
                    deferred.reject(users.status);
                });

                return deferred.promise;
            },
            deleteUser: function(userID){
                var deferred = $q.defer();
                this.getData().
                then(function success(users) {
                    for (var i = 0; i < usersList.length; i++) {
                        if (usersList[i].id === userID) {
                            usersList.splice([i], 1);
                            deferred.resolve(JSON.parse(JSON.stringify(usersList)));
                            break;
                        }
                    }
                },function error(users) {
                    deferred.reject(users.status);
                });

                return deferred.promise;
            },
            createUser: function(userID){
                var deferred = $q.defer();
                this.getData().
                then(function success(users) {
                    deferred.resolve(JSON.parse(JSON.stringify(usersList)));
                },function error(users) {
                    deferred.reject(users.status);
                });

                return deferred.promise;
            }
        }
    });