const movies = require('../src/data');
//console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  if (!Array.isArray(moviesArray)) return null;
  if (moviesArray.length === 0) return null;

  let directorArr = moviesArray.map(current => current.director);


  return directorArr.filter((current, i) => directorArr.indexOf(current) === i);
};



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  //if (!Array.isArray(moviesArray)) return null;
  if (moviesArray.length === 0) return 0;

  // return moviesArray.filter(o => o.director === 'Steven Spielberg' && o.genre.indexOf('Drama') >= 0).length;
  return moviesArray.filter(o => o.director === 'Steven Spielberg' && o.genre.some(g => g === 'Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  return Number.parseFloat((moviesArray.reduce((previous, current) => previous + (current.score?current.score:0), 0) / moviesArray.length).toFixed(2));


}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) { }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
