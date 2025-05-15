function openPayment(course) {
  document.getElementById("courseName").innerText = course;
  document.getElementById("paymentSection").style.display = "block";
}

function closePayment() {
  document.getElementById("paymentSection").style.display = "none";
}
