var BaseController = function ($scope, $location, SessionService) {
    $scope.HelloAgain = "Hello World";
    

    $scope.loggedIn = function () {
        return SessionService.getToken() !== undefined;
    }

    $scope.logOut = function () {
        SessionService.setToken("");
        SessionService.setUserName("");
        $location.path('/');
    }

    $scope.loggedInUserName = function () {
        return SessionService.getUserName();
    }
}

BaseController.$inject = ["$scope", '$location' , 'SessionService'];