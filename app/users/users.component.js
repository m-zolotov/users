'use strict';

angular.module('Users')
    .component('usersList', {
        templateUrl: 'users/users-list.template.html',
        controller: ['userService', '$http', '$q', '$routeParams', function(userService, $http, $q, $routeParams) {
            var self = this;
            var promiseObj = userService.getData();
            self.title = 'Список юзеров';
            promiseObj.then(function(value) {
                self.users = value;
            });
        }]
    })
    .component('userDetail', {
        templateUrl: 'users/users-detail.template.html',
        controller: ['userService', '$http', '$q', '$routeParams', function(userService, $http, $q, $routeParams) {
            var self = this;
            var userID = $routeParams.userId;
            self.title = 'Сраница юзера' + userID;
        }]
    });