'use strict';

angular.module('Accordion')
    .component('productAccordion', {
        templateUrl: 'accordion/product-accordion.template.html',
        controller: ['accordionService', '$http', '$q', '$routeParams', function(accordionService, $http, $q, $routeParams) {
            var self = this;
            self.title = 'Список продуктов';
            self.template = {
                url: '/accordion/product-category.html'
            };

            accordionService.getData().then(function(value) {
                self.products = value;
            });
        }]
    });