'use strict';

angular.module('myApp', ['ngRoute', 'Users']);

angular.module('myApp')
    .config( ['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/users/list', {
                templateUrl: 'users/users-list.template.html'
            })
            .when('/users/:userId', {
                templateUrl: 'users/users-detail.template.html'
            })
            .otherwise({
                redirectTo: '/users/list'
                // template: '404 No such page'
            });
    }]);