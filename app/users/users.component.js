'use strict';

angular.module('Users')
    .controller('UsersListCtr', ['$http', '$q', 'userService', function($http, $q, userService) {
        var self = this;
        var promiseObj = userService.getData();
        self.title = 'Список юзеров';
        promiseObj.then(function(value) {
            self.users = value;
        });
    }]);