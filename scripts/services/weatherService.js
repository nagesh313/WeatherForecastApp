angular.module('weatherForecastApp').service('WeatherService', ['$http', '$q', 'LocationService', 'APPCONSTANT','AppParameters', function ($http, $q, LocationService, APPCONSTANT,AppParameters) {
    this.getForecastForDayByCurrentLocation = function (coordinates) {
        var deferred = $q.defer();
        $http.get('http://api.openweathermap.org/data/2.5/forecast?lat=' + coordinates.latitude + '&lon=' + coordinates.longitude+ '&APPID=' + APPCONSTANT.APIKEY + '&cnt='+AppParameters.cnt+'&units=metric')
               .then(function (response) {
                    deferred.resolve(response.data);
                }, function (responseData) {
                    deferred.reject(responseData.data);
            })
        // LocationService.getCurrentLocation().then(function (data) {
        //     var coordinates = data;
        //     $http.get('//api.openweathermap.org/data/2.5/forecast?lat=' + coordinates.latitude + '&lon=' + coordinates.latitude + '&APPID=' + APPCONSTANT.APIKEY + '&cnt='+AppParameters.cnt+'&units=metric')
        //         .then(function (response) {
        //             deferred.resolve(response.data);
        //         }, function (responseData) {
        //             deferred.reject(response.data);
        //         })
        // })
        return deferred.promise;
    };
    this.getForecastByLocation = function (locationName) {
        var deferred = $q.defer();
        $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + locationName + '&APPID=' + APPCONSTANT.APIKEY + '&units=metric')
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (responseData) {
                deferred.reject(responseData.data);
            })
        return deferred.promise;
    }
}]);
