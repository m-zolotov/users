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

            self.saveUser = function () {
                userService.saveUser(self.user).then(function(value) {
                    // console.log('value', value);
                    self.user = value;
                });
            };
        }]
    });