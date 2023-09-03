const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?","");
let personalMovieDB = {
count:numberOfFilms,
movies:{},
actors:{},
genres:[],
privat:false
};
      a = prompt("Один из последнихх просмотренных фильмов:",""),
      b = +prompt("На сколько оцените фильм?",""),
      c = prompt("Один из последнихх просмотренных фильмов",""),
      d = +prompt("На сколько оцените фильм?","");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);



      