(function() {
    'use strict';
    var app = angular.module('app', ['ui.router']);  // Only for creating a app  u give []   dependency injection of participant

    app.config(function ($stateProvider) {
        $stateProvider.state('index', {
            url: '/',
            templateUrl: 'app/template/view-all-movies.html',
            controller : 'ViewMovieController as  vmc'
        }).state('viewMovie',
            {   url:'/view-movie/:releaseyear',
                templateUrl:'app/template/view-movie.html',
                controller:'ViewAMovieController as vam'
            }
        ).state('addMovie',
            {   url:'/add-movie',
                templateUrl:'app/template/add-movie.html',
                controller:'AddMovieController as amc'
            }
        );
    });

    app.controller('ApplicationController',['$state',function ($state) {
        $state.go('index');
    }]);

    app.filter('range', function() {
        return function(input, total) {
            total = parseInt(total);

            for (var i=0; i<total; i++) {
                input.push(i);
            }

            return input;
        };
    });
})();