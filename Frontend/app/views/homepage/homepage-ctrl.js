import Masonry from 'masonry-layout';

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

  changeName() {
    $scope.name = 'angular-tips';
  }
}
