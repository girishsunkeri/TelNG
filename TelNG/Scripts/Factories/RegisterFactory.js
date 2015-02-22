var RegisterFactory = function ($http, $q, SessionService) {
    return function (userName, password, confirmPassword) {
        var result = $q.defer();

        var params = { userName: userName, password: password, confirmPassword: confirmPassword };

        $http({
            method: 'POST',
            url: SessionService.apiUrl + '/api/Account/register',
            data: params,
            header: {'Content-Type': 'application/json'}
        })
        .success(function (response) {
            result.resolve(response);
        })
        .error(function (response) {
            result.reject(response);
        });

        return result.promise;
    }
}

RegisterFactory.$inject = ['$http', '$q', 'SessionService'];