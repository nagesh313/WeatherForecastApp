angular
  .module('weatherForecastApp', [
    'ngRoute',    
  ])
  .constant('APPCONSTANT',{
   'APIKEY' :'74a29b508dbadb2defb8ce9335fa9de0'
  }).value('AppParameters',{
    colxscount:6,
    colmdcount:4,
    collgcount:2,
    cnt:10
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
          .when('/parameters', {
        templateUrl: 'views/param.html',
        controller: 'ParamController',
        controllerAs: 'param'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
