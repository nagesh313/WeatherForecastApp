angular.module('weatherForecastApp')
  .controller('ForecastByLocationController', ['WeatherService', function (WeatherService) {
    var vm = this;  
    vm.getForecastForLocation = function () {
       // vm.location='Pune';
        vm.error=false;
      vm.errorData = {};
      vm.forecastDetails = {};
      WeatherService.getForecastByLocation(vm.location).then(function (response) {
          vm.error=false;
        vm.forecastDetails = response;
        console.log(response);
      }, function (response) {
          vm.error=true;
        vm.errorData = response;
      })
    }
  }]);
