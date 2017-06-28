'use strict';

angular.module('Accordion')
    .component('productAccordion', {
        templateUrl: 'accordion/product-accordion.template.html',
        controller: ['accordionService', '$http', '$q', '$routeParams', function(accordionService, $http, $q, $routeParams) {
            var self = this;
            self.title = 'Список продуктов';
            self.hideElement = true;
            self.showElement = false;

            self.visibleElements = function () {
                if (self.hideElement === true && self.showElement === false) {
                    self.hideElement = false;
                    self.showElement = true;
                } else if (self.hideElement === false && self.showElement === true) {
                    self.hideElement = true;
                    self.showElement = false;
                }
            };

            accordionService.getData().then(function(value) {
                self.products = value;
            });
        }]
    });