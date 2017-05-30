'use strict';

angular.module('Users')
    .component('usersList', {
        templateUrl: 'users/users-list.template.html',
        controller: ['userService', '$http', '$q', '$routeParams', function(userService, $http, $q, $routeParams) {
            var self = this;
            self.title = 'Список юзеров';

            userService.getData().then(function(value) {
                self.users = value;
            });

            self.deleteUser = function (userID) {
                userService.deleteUser(userID).then(function(value) {
                    self.users = value;
                });
            };
        }]
    });