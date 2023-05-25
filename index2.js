function redirectToPage() {
  
    var url = "index.html";
    window.location.href = url;
  }

  $(document).ready(function() {
    $('.register-link').click(function(e) {
      e.preventDefault();
      $('.login').hide();
      $('.register').show();
    });

    $('.login-link').click(function(e) {
      e.preventDefault();
      $('.register').hide();
      $('.login').show();
    });
  });