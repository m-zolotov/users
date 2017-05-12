'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.service('UserService', function ($http) {
    var self = this;
    this.userList;
    $http.get('./api/users.json').success(function (data, status, headers, config) {
        self.userList = data;
        return self.userList;
    });
})

.controller('View1Ctrl', ['$scope', '$http', 'UserService', function($scope, $http, UserService) {
    $scope.title = 'Список юзеров';
    $scope.users = UserService.userList;
}]);