'use strict';
angular.module('weatherForecastApp')
  .controller('ParamController', ['AppParameters', function (AppParameters) {
    //  this.forecastDetails={};
    var vm = this;
    vm.values=AppParameters;
    this.saveParameters=function(){
      AppParameters=vm.values;
      console.log(AppParameters);
      alert("Parameters set Successfully");
    }
  }]);