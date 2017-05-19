'use strict';
angular.module('weatherForecastApp')
  .controller('HomeController', ['WeatherService', function (WeatherService) {
    //  this.forecastDetails={};
    var vm = this;
    WeatherService.getForecastForDayByCurrentLocation().then(function (data) {
      vm.forecastDetails = data;
    }, function () {

    });
  }]);
