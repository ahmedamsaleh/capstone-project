import angular from 'angular';
import {common} from './common/common';
<<<<<<< HEAD
<<<<<<< HEAD
import {products} from './products/products';

export const components = angular.module('components', [
  common.name,
  products.name
=======
import {product} from './product/product';

export const components = angular.module('components', [
  common.name,
  product.name
>>>>>>> integration
=======
import {products} from './products/products';

export const components = angular.module('components', [
  common.name,
  products.name
>>>>>>> 531c8e9f2013792b7765e3eeccaf72c6871bc07b
]);
