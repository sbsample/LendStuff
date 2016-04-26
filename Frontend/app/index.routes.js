export function routerConfig ($stateProvider, $urlRouterProvider) {
  // 'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/homepage/homepage.html',
      controller: 'HomepageController',
      controllerAs: 'vm'
    })

  $urlRouterProvider.otherwise('/');
}
