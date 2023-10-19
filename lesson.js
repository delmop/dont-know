'use strict';

let numberOfFilms;


function start() {
      numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?","");
      while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?","");
      }
}
start();


let personalMovieDB = {
count:numberOfFilms,
movies:{},
actors:{},
genres:[],
privat:false
};

function showMyDB(hidden) {
      if (!hidden) {
            console.log(personalMovieDB)
      } 
};
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
      for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 2] = prompt(`Ваш любимый жанр под номером ${i}`);
      }
};
writeYourGenres();


function rememberMyFilms() {
      let c = 0;
      while (c != 2) { 
      const a = prompt('Один из последних просмотренных фильмо:',''),
            b = prompt('На сколько оцените его:','');
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB[a] = b;
            console.log('done!');
            c++;
      } else {
            console.log('error!')
            c--;
      }
}
}
// rememberMyFilms();




function detectPersonalLevel() {
      console.log(personalMovieDB);
if (personalMovieDB.count < 10){
      console.log('Просмотренно довльно мало фильмов..')
};  if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
      console.log('Вы среднестатистический зритель.')
};  if (personalMovieDB.count >= 30) {
      console.log('Вы киноман!')
} else {
      console.log('Произошла ошибка!!!')
}
}
// detectPersonalLevel();








