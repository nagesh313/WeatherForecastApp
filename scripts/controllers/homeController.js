'use strict';
angular.module('weatherForecastApp')
  .controller('HomeController', ['WeatherService', 'AppParameters', function (WeatherService, AppParameters) {
    //  this.forecastDetails={};

    var vm = this;
    vm.AppParameters = AppParameters;
    vm.getForecastByLatitudeLogitude = function () {
  vm.error=false;
      WeatherService.getForecastForDayByCurrentLocation({latitude:vm.latitude,longitude:vm.longitude})
      .then(function (data) {
        vm.error=false;
        vm.forecastDetails = data;
      }, function (responseData) {
        vm.error=true;
        vm.errorMessage=responseData.message;
      });
    }

  }]);
