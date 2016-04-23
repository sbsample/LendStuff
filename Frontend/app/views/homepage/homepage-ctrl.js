import Masonry from 'masonry-layout';
// const fs = require('fs');

export default class HomepageController {
  constructor($scope) {
    $scope.name = 'World'
    this.msnry =  angular.element(document).ready(function () {
      return new Masonry('.grid', {
       itemSelector: '.grid-item',
       columnWidth: 100
      });
    });
  }

  fuck(){
    console.log('fuck')
  }

  changeName() {
    $scope.name = 'angular-tips';
  }
}
