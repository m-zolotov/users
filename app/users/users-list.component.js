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
    });