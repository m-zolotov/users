'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

/*.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
    $scope.title = 'Список юзеров';
    $http.get('./api/users.json').success(function (data, status, headers, config) {
        $scope.users = data;
    });
}]);*/

/*.service('UserService', function ($http) {
    let self = this;
    self.getInfo = function () {
        $http.get('./api/users.json').success(function (data, status, headers, config) {
            $scope.users = data;
        });
    }
})*/

.service('UserService', function () {

})

.controller('View1Ctrl', ['$scope', '$http', 'UserService', function($scope, $http, UserService) {
    $scope.title = 'Список юзеров';
    $http.get('./api/users.json').success(function (data, status, headers, config) {
        $scope.users = data;
    });
}]);