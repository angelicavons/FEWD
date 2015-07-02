//Define prototypical Gallery function
Element.prototype.Gallery = function(){

 var gallery = this;
 var ul = gallery.children[0];
 var photos = {};
 // Define global variables(

 this.singlePhoto = function(ev) {

     console.log(ev.target.style.backgroundImage);

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

   //   var singlePhoto = document.createElement('div');
   //   var modal = document.getElementsByTagName("body")[0];
   //
   //       singlePhoto.classList.add('single-photo');
   //       modal.appendChild(singlePhoto);
   //
   //   singlePhoto.innerHTML = ev.srcElement.innerHTML;
   //
   // var x = ev;
   // console.log(x);


 };

 this.layoutPhotos = function(){
     // add logic for each photo in here
             photos.forEach(function(photo,index){

                 // console.log(photo);
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
                 li.addEventListener('mousedown',gallery.singlePhoto);
                 ul.appendChild(li);

             });

 };

 this.getFilteredList = function(searchTerm) {
   if (searchTerm) {
     console.log("I am searching the gallery for: " + searchTerm);//XXX
   }
   return;
 };

 this.connect = function(){
     var xhr = new XMLHttpRequest();
     xhr.open("GET", "./models/popular-photos.json", true);
     xhr.setRequestHeader("Content-Type", "application/json");

     xhr.onreadystatechange = function() {
       if (xhr.readyState == 4) {
             var response = JSON.parse(xhr.responseText);
             // console.log(response);
             photos = response.photos
             gallery.layoutPhotos();
             // console.log(this);
         // JSON.parse does not evaluate the attacker's scripts via xhr.responseText.

       }
     }
     xhr.send();
 };


 this.init = function(){

   this.connect();

 };


 this.init(); // do tasks on initialization.


};
/* end Gallery */
