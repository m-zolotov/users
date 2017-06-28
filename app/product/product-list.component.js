'use strict';

angular.module('Product')
    .component('productList', {
        templateUrl: 'product/product-list.template.html',
        controller: ['productService', '$http', '$q', '$routeParams', function(productService, $http, $q, $routeParams) {
            var self = this;
            self.title = 'Список продуктов';

            productService.getData().then(function(value) {
                self.products = value;
            });
        }]
    });