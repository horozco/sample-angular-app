'use strict';

angular.module('myApp')
  .directive('starRating', function(){
    return {
      restrict: 'E',
      scope: {
        teammate: '=ngModel'
      },
      templateUrl: 'templates/stars.html',
      link: function(scope) {
        scope.stars = [
        	{
        		value: 5,
        		message: 'Awesome - 5 stars'
        	},
        	{
        		value: 4,
        		message: 'Pretty good - 4 stars'
        	},
        	{
        		value: 3,
        		message: 'Meh - 3 stars'
        	},
        	{
        		value: 2,
        		message: 'Kinda bad - 2 stars'
        	},
        	{
        		value: 1,
        		message: 'Sucks big time - 1 star'
        	}
        ];
        scope.evaluate = function(value) {
          scope.teammate.rating = value;
        };
      }
    }
  });
