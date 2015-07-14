Element.prototype.Search = function(){
  //when the user focuses on the input, clear its contents
  //after the user presses "enter/return", filter the gallery <li> using tags from the JSON model.

  var gallery = document.getElementById('gallery');
var search = this;
var input = this.children[0];

  // Initialization method
  this.init = function(){
    input.addEventListener("focus", function(){
      this.value = '';
    });


  input.addEventListener('keyup', function(ev){
    if(ev.keyCOde === 13) {
      var query = input.value;
        gallery.filterPhotos(query);
    }

  });
  };

  this.init();
};
