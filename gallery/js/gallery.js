//Define prototypical Gallery function
Element.prototype.Gallery = function(){

 var gallery = this;
 var ul = gallery.children[0];
 var photos = new Object();
 var container = document.getElementById('container');


 // Define global variables(

 this.singlePhoto = function(ev) {



   var section = document.createElement('section');
   section.classList.add('single-photo');
   section.innerHTML = ev.target.innerHTML;
   section.style.backgroundImage = ev.target.style.backgroundImage;
   section.style.backgroundRepeat = 'no-repeat';
   section.style.zIndex = '50';

   section.style.backgroundSize = 'contain';
   section.style.backgroundPosition = 'center center';
   var p =document.createElement('p');
   section.style.height = '100%';

   var closeButton = document.createElement('div');
   closeButton.classList.add('close');

   closeButton.addEventListener('click',function(){
       section.style.display = 'none';
   });
   section.children[0].appendChild(p);
   section.appendChild(closeButton);
   container.appendChild(section);


 };

 this.filterPhotos = function(query) {
for(var i=0;i<ul.children.length; i++) {
  var tags = ul.children[i].dataset.tags;
  var arr = tags.split(',');
  var matched = false;

  arr.forEach(function(tag){
    if)tag === query){
      ul.children[i].style.display = "block";
      matched = true;

    }
  });
      if(matched === false){
        ul.children[i].style.display = 'none';
      }

if(query === 'all') {
  ul.children[i].style.display = 'block';
}

}

 };

 this.layoutPhotos = function(){
     // add logic for each photo in here
             photos.forEach(function(photo,index){

                 console.log(photo);
                 var li = document.createElement('li');

                 li.style.backgroundImage = 'url("'+photo.image_url+'")';
                 li.style.backgroundSize = 'cover';

                 li.innerHTML = '<div class="meta"><h5>'+
                     photo.name+
                     '</h5><h6>'+
                     photo.user.fullname+
                     '</h6></div><div class="stats"><div>'+
                     photo.rating+'</div></div>'+
                     '</div>';

                     var tags = [];

                     photo.tags.forEach(function(tag){
                       tags.push(tag.toLowerCase());
                     });
                     gallery.allTheTags.push(tags);
                li.dataset.tags = tags;
              li.dataset.description = photo.description;

                 li.addEventListener('click',gallery.singlePhoto);

                 ul.appendChild(li);

             });

 };




 this.init = function(){

   this.connect();

 };


 this.init(); // do tasks on initialization.


};
/* end Gallery */
