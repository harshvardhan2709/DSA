function showOffers() {
  const offerSection = document.getElementById('offerDetails');
  if (offerSection.style.display === "none") {
    offerSection.style.display = "block";
  } else {
    offerSection.style.display = "none";
  }
}
