angular.module('weatherForecastApp').service('WeatherService', ['$http', '$q', 'LocationService', 'APPCONSTANT', function ($http, $q, LocationService, APPCONSTANT) {
    this.getForecastForDayByCurrentLocation = function (date) {
        var deferred = $q.defer();
        LocationService.getCurrentLocation().then(function (data) {
            var coordinates = data;
            $http.get('//api.openweathermap.org/data/2.5/forecast?lat=' + coordinates.latitude + '&lon=' + coordinates.latitude + '&APPID=' + APPCONSTANT.APIKEY + '&cnt=10&units=metric')
                .then(function (response) {
                    deferred.resolve(response.data);
                }, function (responseData) {
                    deferred.reject(response.data);
                })
        })
        return deferred.promise;
    };
    this.getForecastByLocation = function (locationName) {
        var deferred = $q.defer();
        $http.get('//api.openweathermap.org/data/2.5/forecast?q=' + locationName + '&APPID=' + APPCONSTANT.APIKEY+'&units=metric')
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (responseData) {
                deferred.reject(responseData.data);
            })
        return deferred.promise;
    }
}]);