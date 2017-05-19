angular.module('weatherForecastApp')
  .controller('ForecastByLocationController', ['WeatherService', function (WeatherService) {
    var vm = this;
    vm.getForecastForLocation = function () {
      vm.errorData = {};
      vm.forecastData = {};
      WeatherService.getForecastByLocation(this.location).then(function (response) {
        vm.forecastData = response;
        console.log(response);
      }, function (response) {
        vm.errorData = response;
      })
    }
  }]);
