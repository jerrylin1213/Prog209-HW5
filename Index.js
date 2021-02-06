let movieTitle = document.getElementById("title");
let movieRating = document.getElementById("rating");
let movieCount = document.getElementById("count");
let movieList = [];
movieTitle.focus();


function addMovie() {
  if (movieTitle.value == "") {
      alert("Please enter a movie title.");
  } else if (isNaN(movieRating.value) || movieRating.value == "") {
      alert("Please enter number for rating.");
  } else if (parseInt(movieRating.value) < 1 || parseInt(movieRating.value) > 5) {
      alert("Please enter a rating between \"1\" and \"5\".");
  }
  else {  
      let movie_inp = movieTitle.value;
      let rating_inp = movieRating.value;
      let Movie = new MovieObj(movie_inp, rating_inp);
      movieList.push(Movie);
      // show number of movies
      movieCount.innerHTML = " " + movieList.length + " " + " movie(s)";
  }
  // clear out the 2 input boxes and refocus on movieTitle.
  movieTitle.value = "";
  movieRating.value = "";
  movieTitle.focus();
}

function showMovie()
{
  if (movieList.length > 0)
  {
    sortByRatings();   // sort movies by ratings
    let str = "Sort Movies by Ratings (good to bad):" + "<br>";  //sort movies by ratings

    //let str = "Movies and Ratings:" + "<br><br>";  // list movies and ratings
    for (let i=0; i < movieList.length; i++) {
      str += movieList[i].toString();
    }

    document.getElementById("result").innerHTML = str;
  }
}

function sortByRatings() {
  movieList.sort( (a,b) => { return b.rating - a.rating; } );
}