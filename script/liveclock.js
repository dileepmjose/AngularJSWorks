var app = angular.module('myApp', []);
app.controller('DisplayTimeCtrl', function($scope, $interval) {
	$scope.theTime = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);
});