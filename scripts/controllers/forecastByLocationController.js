angular.module('weatherForecastApp')
  .controller('ForecastByLocationController', ['WeatherService','AppParameters', function (WeatherService,AppParameters) {
    var vm = this;  
    vm.AppParameters=AppParameters;
    vm.getForecastForLocation = function () {
      console.log(AppParameters);
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
