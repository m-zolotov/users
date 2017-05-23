'use strict';

angular.module('Users')
    .component('userDetail', {
        templateUrl: 'users/users-detail.template.html',
        controller: ['userService', '$http', '$q', '$routeParams', function(userService, $http, $q, $routeParams) {
            var self = this;
            var userProfile;
            var userID = $routeParams.userId;
            var promiseObjDetail = userService.getData();
            promiseObjDetail.then(function(value) {
                for (var i = 0; i < value.length; i++) {
                    if (value[i].id === userID) {
                        userProfile = value[i];
                    }
                }
            });
            console.log(userProfile);

            //self.title = userID;//user.name;

        }]
    });