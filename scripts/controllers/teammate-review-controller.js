'use strict';

angular.module('myApp')
	.controller('TeammateReviewController', ['$scope', function($scope) {
	  $scope.decline = function(teammate){
	  	teammate.visible = false
	  }
	  $scope.send = function(teammate){
	  	alert("Your response has been sent: Rating: " + teammate.rating);
	  	teammate.visible = false;
	  }
	}]);
