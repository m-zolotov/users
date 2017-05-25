'use strict';

angular.module('Users')
    .component('userDetail', {
        templateUrl: 'users/users-detail.template.html',
        controller: ['userService', '$http', '$q', '$routeParams', function(userService, $http, $q, $routeParams) {
            var self = this;
            var userID = $routeParams.userId;
            userService.getUser(userID).then(function(value) {
                self.user = value;
            });
            // userService.editUser(user);
            // userService.saveUser(user);
        }]
    });