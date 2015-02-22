var ItemFactory = function ($http, $q, SessionService) {
    return {
        getItems: function () {
            var result = $q.defer();

            $http({
                method: 'GET',
                url: SessionService.apiUrl + '/api/Item',
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + SessionService.getToken() }
            })
            .success(function (response) {
                return result.resolve(response);
            })
            .error(function (response) {
                return result.reject(response);
            })

            return result.promise;
        },
        addItem: function (item) {
            var result = $q.defer();

            $http({
                method: 'POST',
                url: SessionService.apiUrl + "/api/Item",
                data: item,
                header: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + SessionService.getToken() }
            })
            .success(function (response) {
                result.resolve(response);
            })
            .error(function (response) {
                result.reject(response);
            })

            return result.promise;
        }
    }
}

ItemFactory.$inject = ['$http', '$q', 'SessionService'];