'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.service('myUserService', function () {
    let self = this;
    this.myText = '';
    this.getLength = function () {
        return self.myText.length;
    }
})

.controller('View1Ctrl', ['$scope','$http', 'myUserService', function($scope, $http, myUserService) {
    $scope.title = 'Список юзеров';
    $http.get('./api/users.json').success(function (data, status, headers, config) {
        $scope.users = data;
    });
    console.log(myUserService);
}]);