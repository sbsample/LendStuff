"use strict";

import angular from 'angular';
import router from 'angular-ui-router';
import bootstrap from 'angular-bootstrap-npm';
import { routerConfig } from './index.routes.js';
import { NavbarDirective } from './directives/navbar/navbar-directive.js';
import HomepageController from './views/homepage/homepage-ctrl.js';

angular.module('shareSpace', ['ui.router', 'ui.bootstrap'])
  .config(routerConfig)
  .directive('sharespaceNavbar', NavbarDirective)
  .controller('HomepageController', HomepageController);
