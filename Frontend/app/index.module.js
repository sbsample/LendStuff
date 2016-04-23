"use strict";

import angular from 'angular';
import HomepageController from './views/homepage/homepage-ctrl.js';
// var Masonry = require('masonry-layout');

angular.module('lendStuff', [])
  .controller('HomepageController', HomepageController);
