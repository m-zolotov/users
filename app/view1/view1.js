'use strict';

angular.module('firstPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

firstPage.controller('View1Ctrl', ['$scope','$http', function($scope, $http) {
    $scope.title = 'Список юзеров';
    $http.get('./api/users.json').success(function (data, status, headers, config) {
        $scope.users = data;
    });
}]);