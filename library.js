const container = document.getElementById("booklist");
let books = JSON.parse(localStorage.getItem("books")) || [];
if (books.length === 0) {
  container.innerHTML = `
    <div class="empty-state">
      <h2>You haven’t added any books yet.</h2>
      <p>Start building your personal library now.</p>
      <a href="addbook.html" class="empty-btn">Add Your First Book</a>
    </div>
  `;
}

/* ---------- RENDER BOOKS ---------- */
else {
books.forEach(book => {
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  bookDiv.innerHTML = `
    <img src="${book.image}" alt="${book.title}">
    ${book.status ? `<span class="status ${book.status.toLowerCase()}">${book.status}</span>` : ""}
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
    <p class="stars">${"★".repeat(book.rating)}${"☆".repeat(5 - book.rating)}</p>

    <button class="details-btn"
      data-title="${book.title}"
      data-author="${book.author}"
      data-review="${book.review}"
      data-status="${book.status}">
      View Details
    </button>
    <button class="delete-btn">Delete</button>
  `;

  container.appendChild(bookDiv);
});
}
/* ---------- MODAL ---------- */
const modal = document.getElementById("bookModal");
const closeBtn = document.querySelector(".close");

document.addEventListener("click", function(e) {

  if (e.target.classList.contains("details-btn")) {
    document.getElementById("modalTitle").textContent = e.target.dataset.title;
    document.getElementById("modalAuthor").textContent = "Author: " + e.target.dataset.author;
    document.getElementById("modalStatus").textContent = "Status: " + (e.target.dataset.status || "Not set");
    document.getElementById("modalReview").textContent = e.target.dataset.review;

    modal.style.display = "flex";
  }

  if (e.target.classList.contains("delete-btn")) {
    const bookCard = e.target.closest(".book");
    const title = bookCard.querySelector("h3").textContent;

    books = books.filter(book => book.title !== title);
    localStorage.setItem("books", JSON.stringify(books));

    bookCard.remove();
  }
});

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

/* ---------- FILTER ---------- */
document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", function() {

    document.querySelectorAll(".filters button")
      .forEach(b => b.classList.remove("active"));

    this.classList.add("active");

    const filter = this.dataset.filter;

    document.querySelectorAll(".book").forEach(card => {
      const status = card.querySelector(".status")?.textContent;

      if (filter === "all" || status === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});