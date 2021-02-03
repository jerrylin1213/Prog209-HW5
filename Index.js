let movieTitle = document.getElementById("title");
let movieRating = document.getElementById("rating");
// let movieList = ["Movie Title", "Movie Rating"];  // Hugh commented
let movieList = [];   // Hugh added

function addMovie() {
    if (movieTitle.value == "") {
        alert("Please enter a movie title.");
    } else if (isNaN(movieRating.value) || movieRating.value == "") {
        alert("Please enter number for rating.");
    } else if (parseInt(movieRating.value) < 1 || parseInt(movieRating.value) > 5) {
        alert("Please enter a rating between \"1\" and \"5\".");
    }
    else {
        
        let movie_inp = movieTitle.value;       // Hugh added
        let rating_inp = movieRating.value;     // Hugh added
        let Movie = new MovieObj(movie_inp, rating_inp);  // Hugh added
        movieList.push(Movie);  // Hugh added
        // movieList.push(movieTitle, movieRating);  // Hugh commented
    }
    // clear out the 2 input boxes and refocus on movieTitle. Hugh added
    movieTitle.value = "";   // Hugh added
    movieRating.value = "";  // Hugh added
    movieTitle.focus();      // Hugh added
}

// Hugh commented
// function showMovie() {
//     movieList += document.getElementsByName("input");
//     document.getElementById("result").innerHTML += movieList.length;

//     for (let i = 0; i < movieList.length; i++) {
//         // document.getElementById("result").innerHTML += movieList[i].value + " ";
//     }
// }

// Hugh added this function
function showMovie()
{
  if (movieList.length > 0)
  {
    // document.getElementById("result").style.visibility = "visible";

    // sortByRatings();

    let str = "Movies and Ratings:" + "<br><br>";
    for (let i=0; i < movieList.length; i++) {
      str += movieList[i].toString();
    }

    document.getElementById("result").innerHTML = str;
  }
}