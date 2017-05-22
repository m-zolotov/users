'use strict';

angular.module('Users')
    .component('userDetail', {
        templateUrl: 'users/users-detail.template.html',
        controller: ['userService', '$http', '$q', '$routeParams', function(userService, $http, $q, $routeParams) {
            var self = this;
            var userID = $routeParams.userId;
            var promiseObjDetail = userService.getData();
            console.log(promiseObjDetail);
            //var userName = $routeParams.userName;
            self.title = 'Сраница юзера ' + userID;//user.name
        }]
    });