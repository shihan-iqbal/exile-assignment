(function () {
    'use strict';
    var app = angular.module('app');
    app.controller('ViewAMovieController', ['MovieService', '$stateParams',function (MovieService, $stateParams) {
       this.movie = MovieService.getMovieByYear($stateParams.releaseyear);


    }]).directive("ratingDirective", function() {
        return {
            templateUrl : 'app/template/directive/rating-directive.html'
        };
    });
})();


