const form = document.getElementById("bookForm");
const stars = document.querySelectorAll(".star-rating span");
const ratingInput = document.getElementById("rating");

/* ---------- STAR CLICK ---------- */
stars.forEach(star => {
  star.addEventListener("click", function() {
    const value = this.dataset.value;
    ratingInput.value = value;

    stars.forEach(s => {
      s.classList.remove("active");
      if (s.dataset.value <= value) {
        s.classList.add("active");
      }
    });
  });
});

/* ---------- FORM SUBMIT ---------- */
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const status = document.getElementById("status").value;
  if (!status) {
    alert("Please select a reading status.");
    return;
  }

  const file = document.getElementById("image").files[0];
  if (!file) {
    alert("Please select an image.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function() {

    const book = {
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      review: document.getElementById("review").value,
      image: reader.result,
      status: status,
      rating: ratingInput.value || "0"
    };

    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));

    alert("Book added successfully!");
    form.reset();
    window.location.href = "library.html";
  };

  reader.readAsDataURL(file);
});