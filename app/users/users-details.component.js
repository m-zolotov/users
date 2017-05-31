'use strict';

angular.module('Users')
    .component('userDetail', {
        templateUrl: 'users/users-detail.template.html',
        controller: ['userService', '$http', '$q', '$routeParams', '$location', function(userService, $http, $q, $routeParams, $location) {
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
                    $location.path('/users/' + self.user.id);
                    self.user = value;
                });
            };

            if (userID === 'create') {
                self.editUser();
            }
        }]
    });