'use strict';
angular.module('weatherForecastApp')
  .controller('HomeController', ['WeatherService','AppParameters', function (WeatherService,AppParameters) {
    //  this.forecastDetails={};
    var vm = this;
    vm.AppParameters=AppParameters;
    WeatherService.getForecastForDayByCurrentLocation().then(function (data) {
      vm.forecastDetails = data;
    }, function () {

    });
  }]);
