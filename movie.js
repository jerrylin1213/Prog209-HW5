
// movie object constructor
let MovieObj = function (title, rating) {
  this.title = title;
  this.rating = rating; 
  this.validate = function() { 
    if ((this.title !== "") && (this.rating !== "")) {
      return true;
    }
    return false;
  };
  this.toString = function() {
    return this.rating + "&nbsp &nbsp &nbsp &nbsp &nbsp" + this.title + "<br>";
  };
};
