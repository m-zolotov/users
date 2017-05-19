'use strict';

angular.module('myApp', ['ngRoute', 'Users']);

angular.module('myApp')
    .config( ['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/users', {
                templateUrl: 'users/users-list.template.html',
                controller: ['userService', '$http', '$q', function(userService, $http, $q) {
                    var self = this;
                    var promiseObj = userService.getData();
                    self.title = 'Список юзеров';
                    promiseObj.then(function(value) {
                        self.users = value;
                    });
                }]
            })
            .when('/users/detail', {
                templateUrl: 'users/users-detail.template.html'
            })
            .otherwise({
                redirectTo: '/users'
            });
    }]);