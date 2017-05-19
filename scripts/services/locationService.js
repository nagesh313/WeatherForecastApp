angular.module('weatherForecastApp').service('LocationService', ['$q', function ($q) {
    this.getCurrentLocation = function () {
        var deferred;
        if (navigator.geolocation) {
            deferred = $q.defer();
            navigator.geolocation.getCurrentPosition(function (position) {
                var currentPosition = { latitude: position.coords.latitude, longitude: position.coords.longitude }
                deferred.resolve(currentPosition);
            });
        } else {
            alert("Geolocation support required");
            deferred.reject(errorReason);
        }
        return deferred.promise;
    }
}]);