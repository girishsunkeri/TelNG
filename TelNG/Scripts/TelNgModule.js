var TelNgModule = angular.module("TelNgModule", ['ngRoute','ngCookies']);
TelNgModule.controller("BaseController", BaseController);
TelNgModule.controller("LoginController", LoginController);
TelNgModule.controller("RegisterController", RegisterController);
TelNgModule.controller('ValuesController', ValuesController);
TelNgModule.controller('ItemController', ItemController);
TelNgModule.service("SessionService", SessionService);
TelNgModule.factory('LoginFactory', LoginFactory);
TelNgModule.factory('RegisterFactory', RegisterFactory);
TelNgModule.factory('GetValuesFactory', GetValuesFactory);
TelNgModule.factory('ItemFactory', ItemFactory);

var ConfigFunction = function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'Templates/Login.html',
            controller: 'LoginController'
        })
        .when('/register', {
            templateUrl: 'Templates/Register.html',
            controller: 'RegisterController'
        })
        .when('/values', {
            templateUrl: 'Templates/Values.html',
            controller: 'ValuesController'
        })
        .when('/items', {
            templateUrl: 'Templates/Items.html',
            controller: 'ItemController'
        });
}

ConfigFunction.$inject = ['$routeProvider'];
TelNgModule.config(ConfigFunction);