'use strict';

angular.module('Users')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/users', {
            component: 'Users'
        });
        $routeProvider.when('/users/detail', {
            component: 'userDetail'
        });
    }]);