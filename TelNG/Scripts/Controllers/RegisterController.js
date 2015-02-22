var RegisterController = function ($scope, LoginFactory, RegisterFactory, SessionService) {
    $scope.registerForm = {
        userName: undefined,
        password: undefined,
        confirmPassword: undefined,
        errorMessage: undefined
    };

    $scope.Register = function () {
        RegisterFactory($scope.registerForm.userName, $scope.registerForm.password, $scope.registerForm.confirmPassword)
        .then(function () {
            LoginFactory($scope.registerForm.userName, $scope.registerForm.password)
            .then(function (response) {
                SessionService.setToken(response.access_token);
               // SessionService.setUserName($scope.loginForm.userName);
            }, function (response) {
                $scope.registerForm.errorMessage = response;
            });
        }, function (response) {
            $scope.registerForm.errorMessage = response;
        });
    }
}

RegisterController.$inject = ['$scope', 'LoginFactory', 'RegisterFactory', 'SessionService'];