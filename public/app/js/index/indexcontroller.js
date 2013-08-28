'use strict';

/* Controllers */

var myApp = angular.module('myApp.controllers', []);

myApp.controller('MyCtrl1', ['$scope', function($scope) {
    $scope.phones = [
        {"name": "Item 1",
        "snippet": "Model item 1"},
        {"name": "Item 2",
        "snippet": "Model item 2"},
        {"name": "Item 3™",
        "snippet": "Model item 3"},
    ];
}]);