



function showAll() {
  var hiddenImgs = document.querySelectorAll('.image-container.hidden img');
  for (var i = 0; i < hiddenImgs.length; i++) {
    hiddenImgs[i].parentNode.classList.remove('hidden');
    // Create a new img element and set its source
    var newImg = document.createElement("img");
    newImg.src = "new-image.jpg";
    // Append the new img element to the toursContainer
    toursContainer.appendChild(newImg);
  }
}
function showAllHotels() {
  var offCards = document.querySelectorAll(".hotel-cards.off");
  for (var i = 0; i < offCards.length; i++) {
    offCards[i].classList.remove("off");
  }
  document.querySelector(".hotel-button").style.display = "none";
}

function showAllActivities() {
  var offCards = document.querySelectorAll(".activities-off1");
  for (var i = 0; i < offCards.length; i++) {
    offCards[i].classList.remove("activities-off1");
  }
  document.querySelector(".activities-button").style.display = "none";
}
