'use strict';

angular.module('myApp', ['ngRoute', 'Users', 'Accordion']);

angular.module('myApp')
    .config( ['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/product/list', {
                template: '<product-accordion></product-accordion>'
            })
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
            });
    }]);