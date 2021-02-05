const NumberofFilms = +prompt( "сколько фильмов вы посмотрели?", "");
 const personalMovieDB = {
    count: NumberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
 };


 const a = prompt('один из последних просмотренных вами фильмов?', ''),
       b = prompt('на сколько оцените его?'),
       c = prompt('один из последних просмотренных вами фильмов?', ''),
       d = prompt('на сколько оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
