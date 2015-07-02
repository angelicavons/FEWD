Element.prototype.Contact = function(){

  var contact = this,
    form = document.getElementById("c_form"),
    submit = document.getElementById('contact-submit'),
    wrapper = document.getElementById("form-wrapper");

this.send = function() {
  var link = 'mailto:angelicavons@gmail.com?subject=Message from '+
            form.children[0].value+
            "&body="+
            form.children[3].value;

window.location.href = link;
wrapper.innerHTML = '<div class="center"><h1>Thanks!</h1></div>';
};

  this.init = function() {
    submit.addEventListener('click', function(ev){
      console.log("hello");
      ev.preventDefault();
      contact.send();

    });


  };

  this.init();

};
