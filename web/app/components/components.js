import angular from 'angular';
import {common} from './common/common';
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
]);
