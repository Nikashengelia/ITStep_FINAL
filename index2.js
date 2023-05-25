
function redirectToPage(page) {
  window.location.href = "index.html";
}
function redirectToPage2(page) {
  window.location.href = "index.html";
}
$(document).ready(function() {
  $('.register-link').click(function(e) {
    e.preventDefault();
    $('.login').hide();
    $('.register').show();
  });
}
  )