'use strict';

angular.module('Users')
    .component('userDetail', {
        templateUrl: 'users/users-detail.template.html',
        controller: ['userService', '$http', '$q', '$routeParams', function(userService, $http, $q, $routeParams) {
            var self = this;
            var userID = $routeParams.userId;
            self.elementsVisibility = false;

            userService.getUser(userID).then(function(value) {
                self.user = value;
            });

            self.editUser = function () {
                self.elementsVisibility = !self.elementsVisibility;
            };

            self.saveUser = function () {
                if (userID === 'create') {
                    self.user.id = '-1';
                }
                self.editUser();
                userService.saveUser(self.user).then(function(value) {
                    self.user = value;
                });
            };

            if (userID === 'create') {
                self.editUser();
            }
        }]
    });