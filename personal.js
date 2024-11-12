
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      emailjs.sendForm('service_0hq07zg', 'template_pv11eyc', this)
          .then(function() {
              alert('Email sent successfully!');
          }, function(error) {
              console.error('Failed to send email:', error);
              alert('Failed to send email. Please try again.');
          });
  });

});
