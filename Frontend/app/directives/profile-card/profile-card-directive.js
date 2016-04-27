export function ProfilecardDirective(){

  let directive = {
    restrict: 'E',
    replace: true,
    templateUrl: 'directives/profile-card/profile-card.html',
    scope: false,
    controller: ProfilecardController,
    controllerAs: 'vm',
    bindToController: true
  }
  return directive;
}

class ProfilecardController {
  constructor(){
  }
}
