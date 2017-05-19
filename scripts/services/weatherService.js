angular.module('weatherForecastApp').service('WeatherService', ['$http', '$q', 'LocationService', 'APPCONSTANT', function ($http, $q, LocationService, APPCONSTANT) {
    this.getForecastForDayByCurrentLocation = function (date) {
        var deferred = $q.defer();
        LocationService.getCurrentLocation().then(function (data) {
            var coordinates = data;
            $http.get('//api.openweathermap.org/data/2.5/forecast?lat=' + coordinates.latitude + '&lon=' + coordinates.latitude + '&APPID=' + APPCONSTANT.APIKEY + '&cnt=10')
                .then(function (response) {
                    deferred.resolve(response.data);
                }, function (responseData) {
                    deferred.reject(response.data);
                })
        })
        return deferred.promise;
    };
}]);