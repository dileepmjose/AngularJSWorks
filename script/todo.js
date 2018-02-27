var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope) {

	$scope.names = [ 'Jani', 'Carl', 'Margareth' ];

	$scope.addtodo = function() {      
	    if ( ($scope.txtvale !== undefined)&&($scope.txtvale !== "")) {
			$scope.names.push($scope.txtvale);
		} else {
			alert("Enter a valid todo")
		}
		$scope.txtvale = "";
	}

	$scope.edittodo = function($index) {
		$scope.mySwitch = false;
	}

	$scope.done = function() {
		$scope.mySwitch = true;
	}

	$scope.deletetodo = function(index) {
		if (index > -1) {
			$scope.names.splice(index, 1);
		}
	}

});
