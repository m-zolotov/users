'use strict';

angular.module('UsersModule').controller('UsersModule', ['$scope', '$http', '$q', 'userService', function($scope, $http, $q, userService) {
    $scope.title = 'Список юзеров';
    var promiseObj = userService.getData();
    promiseObj.then(function(value) {
        $scope.users = value;
    });
}])
.directive('usersTable', function() {
    return {
        restrict: 'E',
        templateUrl: 'users/user-table.html'
    };
})
.directive('pageHeader', function() {
    return {
        restrict: 'E',
        templateUrl: 'users/page-header.html'
    };
});
