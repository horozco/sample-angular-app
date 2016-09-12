'use strict';

angular.module('myApp')
	.controller('ReviewsController', function() {
	  var ctrl = this;

	  ctrl.teammates = [
	  	{
	  		id: 1,
	  		firstName: 'Sanford',
	  		lastName: 'Headrick',
	  		gender: 'male',
	  		profilePicture: 'https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg',
	  		relatedGoals: 4,
	  		visible: true
	  	},
	  	{
	  		id: 2,
	  		firstName: 'Dessie',
	  		lastName: 'Billingslea',
	  		gender: 'female',
	  		profilePicture: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
	  		relatedGoals: 1,
	  		visible: true
	  	},
	  	{
	  		id: 3,
	  		firstName: 'Robbi',
	  		lastName: 'Jarret',
	  		gender: 'female',
	  		profilePicture: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
	  		relatedGoals: 7,
	  		visible: true
	  	},
	  	{
	  		id: 4,
	  		firstName: 'Russ',
	  		lastName: 'Atwood',
	  		gender: 'male',
	  		profilePicture: 'https://s3.amazonaws.com/uifaces/faces/twitter/towhidzaman/128.jpg',
	  		relatedGoals: 2,
	  		visible: true
	  	}
	  ];
	});
