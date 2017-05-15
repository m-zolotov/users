'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])


.factory('UserService', function($http, $q){
    return{
        getData: function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: './api/users.json'}).
            then (function success(response) {
                    deferred.resolve(response.data.question);
                },function error(response) {
                    deferred.reject(response.status);
                }
            );

            return deferred.promise;
        }
    }
})

/*.factory('UserService', function($http, $q){
    return{
        getData: function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: './api/users.json'}).
            then (function success(response) {
                    deferred.resolve(response.data.question);
                },function error(response) {
                    deferred.reject(response.status);
                }
            );
            console.log(deferred.promise);
            return deferred.promise;
        }
    }
})*/


/*.service('UserService', function ($http) {
    var self = this;
    this.userList = '';
    $http.get('./api/users.json').success(function (data, status, headers, config) {
        self.userList = data;
        console.log(self.userList);
    });
})*/

.controller('View1Ctrl', ['$scope', '$http', '$q', 'UserService', function($scope, $http, $q, UserService) {
    $scope.title = 'Список юзеров';
    /*$scope.users = UserService;
    console.log(UserService);
    $q*/
    /*$scope.users = UserService.getData();*/
    /*var promiseObj=UserService.getData();
    promiseObj.then(function(value) {
        $scope.users = value;
    });
    console.log($scope.users);*/

    var promiseObj=UserService.getData();
    promiseObj.then(function(value) { $scope.question=value; });

    $scope.voteUp = function (answer){
        answer.rate++;
    };
    $scope.voteDown = function (answer){
        answer.rate--;
    };
}]);