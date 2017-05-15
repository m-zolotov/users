'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])


.factory('UserService', function($http, $q){
    var userList = undefined;
    return{
        getData: function(){
            var deferred = $q.defer();

            $http({
                method: 'GET', url: './api/users.json'
            }).
            then (function success(response) {
                    userList = response.data;
                    deferred.resolve(userList);
                },function error(response) {
                    deferred.reject(response.status);
                }
            );

            return deferred.promise;
        }
    }
})

.controller('View1Ctrl', ['$scope', '$http', '$q', 'UserService', function($scope, $http, $q, UserService) {
    $scope.title = 'Список юзеров';
    $scope.users = undefined;

    var promiseObj = UserService.getData();

    promiseObj.then(function(value) {
        if ($scope.users === undefined) {
            $scope.users = value;
            console.log ('users', $scope.users);
            UserService.getData().then(function(value) {
                $scope.users2 = value;
                console.log ('users2', $scope.users2);
            });
        }
    });
}]);