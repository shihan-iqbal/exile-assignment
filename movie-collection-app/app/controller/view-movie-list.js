(function () {
    'use strict';
    var app = angular.module('app');
    app.controller('ViewMovieController', ['MovieService', '$scope',function (MovieService, $scope) {
        this.getAllMovies = function () {
            return MovieService.getAllMovies();
        }
    }]).directive("mainRatingDirective", function() {
        return {
            templateUrl : 'app/template/directive/main-rating-directive.html'
        };
    });
})();
