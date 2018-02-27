var app = angular.module('myApp', []);
app.filter('myformat', function() {

	return function(x) {
		var i, c, txt = "";
		for (i = 0; i < x.length; i++) {
			c = x[i];
			if (i % 2 == 0) {
				c = c.toUpperCase();
			}
			txt += c;
		}
		return txt;
	};

});

app.filter('camelcase', function() {
	return function(x) {
		var i, txtArray, responsetxt;
		txtArray = x.split(" ");
		responsetxt = "";
		for (i = 0; i < txtArray.length; i++) {
			if (i != 0) {
				responsetxt = responsetxt + " ";
			}
			responsetxt = responsetxt + captalizeFirstLetter(txtArray[i]);
		}
		return responsetxt;
	};

});
app.controller('CustomfilterCtrl', function($scope) {
	$scope.names = [ 'dave wiliiman', 'Carl thommen', 'Mary shiled',
			'don snowder', 'Brain lara', 'jack kails', 'johny dep' ];
});

function camelize(str) {
	return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
		return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
	}).replace(/\s+/g, '');
}

function captalizeFirstLetter(txt) {
	return txt.substr(0, 1).toUpperCase()
			+ txt.substr(1, txt.length).toLowerCase();
}
