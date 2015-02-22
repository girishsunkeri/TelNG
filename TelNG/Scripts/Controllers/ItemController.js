var ItemController = function ($scope, ItemFactory, SessionService) {
    $scope.items = [];
    $scope.error = {
        message: undefined
    };

    $scope.getItems = function () {
        ItemFactory.getItems()
        .then(function (items) {
            $scope.items = items;
            console.log($scope.items);
        }, function (response) {
            $scope.error.message = response.Message;
        });
    }


    // Current Item
    $scope.currentItem = {
        ItemName: undefined,
        ItemDescription: undefined,
        ItemPrice: undefined
    };

    $scope.addItem = function () {
        ItemFactory.addItem($scope.currentItem)
        .then(function (response) {
            $scope.getItems();
        }, function (response) {
            $scope.error.message = response;

        })
    }

}

ItemController.$inject = ['$scope', 'ItemFactory', 'SessionService'];