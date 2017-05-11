'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http', function($scope, $http, myUserService) {
    $scope.title = 'Список юзеров';
    $http.get('./api/users.json').success(function (data, status, headers, config) {
        $scope.users = data;
    });
}]);