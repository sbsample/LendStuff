export default class HomepageController {
  constructor($scope) {
    $scope.name = 'World';
  }

  changeName() {
    $scope.name = 'angular-tips';
  }
}
