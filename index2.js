
function redirectToPage(page) {
  window.location.href = "index.html";
}
function redirectToPage2(page) {
  window.location.href = "index.html";
}

  fetch('https://kketelauri-001-site1.gtempurl.com/api/user/adduser', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
        "userName": "nikoloz11",
    "firstName": "nikoloz",
    "lastName": "shengelia",
    "email": "keti4@gmail.com",
    "privateNumber": "12345678914",
    "password": "123",
    "active": true})
})

   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))