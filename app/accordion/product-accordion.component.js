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
                    allProducts[i].tooltipOpen = "false";
                    if (typeof(allProducts[i].products) === 'object') {
                        items = allProducts[i].products;
                        self.setTooltip(items);
                    }
                }
            };

            self.setTooltip = function(product) {
                var items;
                /*console.log('product', product);
                console.log('tooltipOpen', typeof(product.tooltipOpen));*/
                if (product.tooltipOpen === "false") {
                    console.log('tooltipOpen', product);
                    self.closeTooltip(self.products);
                    product.tooltipOpen = "true";
                } else if (product.tooltipOpen === "true") {
                    console.log('tooltipOpen', product);
                    self.closeTooltip(self.products);
                }
            }
        }]
    });
/*if (product.tooltipOpen === "false") {
 for (var i = 0; i < self.products.length; i++) {
 self.products[i].tooltipOpen = "false";
 console.log('self.products[i]', self.products[i]);
 if (typeof(self.products[i].products) === 'object') {
 items = self.products[i].products;
 self.setTooltip(items);
 //debugger;
 console.log('self.products[i].products', self.products[i].products);
 }
 }
 product.tooltipOpen = "true";
 } else if (product.tooltipOpen === "true") {
 for (var i = 0; i < self.products.length; i++) {
 self.products[i].tooltipOpen = "false";
 if (typeof(self.products[i].products) === 'object') {
 items = self.products[i].products;
 self.setTooltip(items);
 //debugger;
 }
 }
 }*/