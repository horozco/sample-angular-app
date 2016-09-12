'use strict';

angular.module('myApp')
  .directive('teammateReview', function(){
    return {
      restrict: 'E',
      scope: {
        teammate: '='
      },
      templateUrl: 'templates/teammate-review.html',
      controller: 'TeammateReviewController'
    }
  });
