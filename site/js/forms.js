// Client-side validation + success state for the contact and newsletter forms.
// No backend is wired up yet — swap the TODO block in each handler for a real
// endpoint (Formspree, WordPress admin-ajax, etc.) when the site goes live.
(function(){
  function showSuccess(form, message){
    var success = form.querySelector('.form-success');
    var error = form.querySelector('.form-error');
    if(error) error.classList.remove('visible');
    if(success){ success.textContent = message; success.classList.add('visible'); }
  }
  function showError(form, message){
    var error = form.querySelector('.form-error');
    if(error){ error.textContent = message; error.classList.add('visible'); }
  }

  var contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      var required = contactForm.querySelectorAll('[required]');
      for(var i=0;i<required.length;i++){
        if(!required[i].value.trim()){
          showError(contactForm, 'Please fill in all required fields before sending.');
          required[i].focus();
          return;
        }
      }
      // TODO: replace with a real submission (e.g. fetch to a Formspree/WP endpoint)
      showSuccess(contactForm, "Thanks — your message has been received. We usually respond within 48 hours.");
      contactForm.reset();
    });
  }

  var newsletterForm = document.getElementById('newsletterForm');
  if(newsletterForm){
    newsletterForm.addEventListener('submit', function(e){
      e.preventDefault();
      var email = newsletterForm.querySelector('input[type=email]');
      if(!email || !email.value.trim() || !email.checkValidity()){
        showError(newsletterForm, 'Enter a valid email address.');
        return;
      }
      // TODO: replace with a real subscribe call (e.g. Mailchimp/ConvertKit API)
      showSuccess(newsletterForm, "You're on the list — we'll email you when new courses open up.");
      newsletterForm.reset();
    });
  }
})();
