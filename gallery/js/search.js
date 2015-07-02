Element.prototype.Search = function(){
  //when the user focuses on the input, clear its contents
  //after the user presses "enter/return", filter the gallery <li> using tags from the JSON model.

  var search=this;
  var search_bar = document.getElementById('searchbar');

  //Gallery
  var gallery = document.getElementById('gallery');
  var galleryElements = gallery.getElementsByTagName('li');
  console.log("galleryElements.length = " + galleryElements.length);//XXX
  for (var i = 0, elements = galleryElements.length; i < elements; i++) {
    galleryElements[i].innerHTML = "foo";
  console.log(galleryElements[i]);//XXX
};


  this.searchTerm = function() {
    galleryElement.getFilteredList(search_bar.value);
  };

  // Search bar focus listener callback
  this.searchBarFocus = function(e) {
    this.searchTerm();
  };

  this.keyPress = function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is the Enter key
      this.searchTerm();
    }
  };



  // Initialization method
  this.init = function(){
    search_bar.addEventListener("focus", this.searchBarFocus, true);
    search_bar.addEventListener("keyup", this.keyPress, true);
  };

  this.init();
};
