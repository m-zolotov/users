'use strict';

angular.module('myApp', ['ngRoute', 'Users']);

angular.module('myApp')
    .config( ['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/users/list', {
                template: '<users-list></users-list>'
            })
            .when('/users/:userId', {
                template: '<user-detail></user-detail>'
            })
            .when('/users/:create', {
                template: '<user-detail></user-detail>'
            })
            .otherwise({
                redirectTo: '/users/list'
                // template: '404 No such page'
            });
    }]);