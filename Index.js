let movieTitle = document.getElementById("title");
let movieRating = document.getElementById("rating");
let movieList = ["Movie Title", "Movie Rating"];

function addMovie() {
    if (movieTitle.value == "") {
        alert("Please enter a movie title.");
    } else if (isNaN(movieRating.value) || movieRating.value == "") {
        alert("Please enter number for rating.");
    } else if (parseInt(movieRating.value) < 1 || parseInt(movieRating.value) > 5) {
        alert("Please enter a rating betwen \"1\" and \"5\".");
    }
    else {
        movieList.push(movieTitle, movieRating);
    }
}

function showMovie() {
    movieList += document.getElementsByName("input");
    document.getElementById("result").innerHTML += movieList.length;

    for (let i = 0; i < movieList.length; i++) {
        // document.getElementById("result").innerHTML += movieList[i].value + " ";
    }
}

