"use strict";

import angular from 'angular';
import bootstrap from 'angular-bootstrap-npm';
import HomepageController from './views/homepage/homepage-ctrl.js';
// var Masonry = require('masonry-layout');

angular.module('lendStuff', ['ui.bootstrap'])
  .controller('HomepageController', HomepageController);
