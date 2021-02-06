// movie object constructor
let MovieObj = function (title, rating) {
  this.title = title;
  this.rating = rating;
  this.validate = function () {
    if ((this.title !== "") && (this.rating !== "")) {
      return true;
    }
    return false;
  };
  this.toString = function () {
    // list movies and ratings
    //return this.title + "&nbsp &nbsp &nbsp &nbsp &nbsp" + this.rating + "<br>";
    
    // sort movies by ratings
    return this.rating + "&nbsp &nbsp &nbsp &nbsp &nbsp" + this.title + "<br>";
  };
};
