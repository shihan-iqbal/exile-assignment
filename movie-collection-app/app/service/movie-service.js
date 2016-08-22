(function () {

    'use strict';

    var app = angular.module('app');
    app.service('MovieService', function () {


        var movies =[
        {   name : "Matrix" ,
            description : "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            releaseyear : 1999,
            ratings : 6,
            language : "English",
            charachters: [ {character : "BB",
                actor : "AA"}]},

        {   name : "The Lord of the Rings" ,
            description : "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
            releaseyear : 2002,
            ratings : 3,
            language : "English",
            charachters: [{character : "BB",
                actor : "AA"}]},

        {   name : "Star Wars: Episode V - The Empire Strikes Back" ,
            description : "After the rebels have been brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.",
            releaseyear : 1989,
            ratings : 8,
            language : "English",
            charachters: [{character : "BB",
                actor : "AA"}]},

        {   name : "Jurassic Park" ,
            description : "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
            releaseyear : 1993,
            ratings : 8,
            language : "French",
            charachters: [{character : "BB",
                actor : "AA"}]}];

       this.getMovieByYear = function (releaseyear) {
           for (var j = 0; j < movies.length; j++) {
               if (movies[j].releaseyear == releaseyear) {
                   return movies[j];
               }
           }
           return null;
       }

       this.getMovieCharacters = function (releaseyear) {
           var movie =  this.getMovieByYear(releaseyear);
           if (movie != null) {
               return movie.charachters;
           }
           return [];
       }

        this. getAllMovies = function () {
            return movies;
        }

        this.addMovie = function(movie) {
            movies.push(movie);
        }

        this.addCharacter = function(releaseyear, character) {
            var movie =  this.getMovieByYear(releaseyear);
            if(movie != null) {
                movie.charachters.push(character);
            }
        }

    })

})();