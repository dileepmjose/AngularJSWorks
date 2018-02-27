var app = angular.module('myApp', []);
app.controller('filterCtrl', function($scope) {
	 $scope.names = [
	        {name:'Jani',country:'Norway',amount:10},
	        {name:'Carl',country:'Sweden',amount:40},
	        {name:'Margareth',country:'England',amount:30},
	        {name:'Hege',country:'Norway',amount:60},
	        {name:'Joe',country:'Denmark',amount:80},
	        {name:'Gustav',country:'Sweden',amount:30},
	        {name:'Birgit',country:'Denmark',amount:40},
	        {name:'Mary',country:'England',amount:70},
	        {name:'Kai',country:'Norway',amount:90}
	        ];
});