const contactForm = document.getElementById("contact-form");
const loader = document.querySelector(".loader");

loader.style.display = "none";

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  loader.style.display = "block";
  const url = e.target.action;
  const formData = new FormData(contactForm);

  fetch(url, {
    method: "POST",
    body: formData
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      loader.style.display = "none";
      return response.text();
    })
    .then(() => {
      window.location.href = "/thankyou.html";
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
      alert("Error occurred");
      loader.style.display = "none";
    });
});
