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

            self.closeTooltip = function (allProducts) {
                var items;
                for (var i = 0; i < allProducts.length; i++) {
                    allProducts[i].tooltipOpen = false;
                    if (typeof(allProducts[i].products) === 'object') {
                        items = allProducts[i].products;
                        self.closeTooltip(items);
                    }
                }
            };

            self.setTooltip = function(product) {
                var items;
                if (product.tooltipOpen === false) {
                    console.log('tooltipOpen', product);
                    self.closeTooltip(self.products);
                    product.tooltipOpen = true;
                } else if (product.tooltipOpen === true) {
                    console.log('tooltipOpen', product);
                    self.closeTooltip(self.products);
                }
            }
        }]
    });