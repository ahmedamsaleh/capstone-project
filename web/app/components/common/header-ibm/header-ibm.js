import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

import {headerIbmComponent} from './header-ibm-component';

export const headerIbm = angular.module('headerIbm', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial
])
.directive('headerIbm', headerIbmComponent);
