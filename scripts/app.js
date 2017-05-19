angular
  .module('weatherForecastApp', [
    'ngRoute',    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
