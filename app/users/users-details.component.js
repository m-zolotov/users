'use strict';

angular.module('Users')
    .component('userDetail', {
        templateUrl: 'users/users-detail.template.html',
        controller: ['userService', '$http', '$q', '$routeParams', function(userService, $http, $q, $routeParams) {
            var self = this;
            var userID = $routeParams.userId;
            /*self.editedUser = {
                "age": 1,
                "id": "5922d651859a67c8665d08bc",
                "name": "name",
                "status": false,
                "about": "about",
                "balance": "$0",
                "gender": "gender",
                "email": "email",
                "phone": "phone",
                "address": "address"
            };*/

            userService.getUser(userID).then(function(value) {
                self.user = value;
            });

            self.saveUser = function () {
                userService.saveUser(self.user).then(function(value) {
                    self.cloneUser = value;
                });
            };
        }]
    });