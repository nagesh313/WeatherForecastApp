angular
  .module('weatherForecastApp', [
    'ngRoute',    
  ])
  .constant('APPCONSTANT',{
   'APIKEY' :'74a29b508dbadb2defb8ce9335fa9de0'
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
    .when('/forecastByLocation', {
        templateUrl: 'views/forecastByLocation.html',
        controller: 'ForecastByLocationController',
        controllerAs: 'forecast'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
