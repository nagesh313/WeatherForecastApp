'use strict';
angular.module('weatherForecastApp')
  .controller('HomeController', ['WeatherService', '$scope', function (WeatherService, $scope) {

    $scope.list = WeatherService.getForecastForDayByCurrentLocation().then(function (data) {
      $scope.list = data;
    }, function () { });

  }]);
