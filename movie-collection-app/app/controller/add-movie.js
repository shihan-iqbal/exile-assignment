(function() {
    'user strict';
    var app = angular.module("app");
    app.controller("AddMovieController", ['MovieService', function(MovieService) {

        // initializing form
        var form = {};

        this.releaseyear = null;
        this.moviename = null;
        this.isTrue = false;

        this.submitMovie = function() {
            MovieService.addMovie({
                name : this.form.name,
                description : this.form.description,
                releaseyear : this.form.releaseyear,
                ratings : this.form.ratings,
                language : this.form.language,
                charachters : []
            });
            this.releaseyear = this.form.releaseyear;
            this.moviename = this.form.name;
            this.isTrue = (this.releaseyear != null);
            this.form.name = '';
            this.form.description = '';
            this.form.language='';
        }


        this.submitMovieCharacter = function() {
            MovieService.addCharacter(this.releaseyear, {
                character : this.form.character,
                actor : this.form.actor,
            });
            this.form.character = '';
            this.form.actor = '';
        }

        this.getMovieCharacters = function(releaseyear) {
            return MovieService.getMovieCharacters(releaseyear);
        }
    }]);

})();
