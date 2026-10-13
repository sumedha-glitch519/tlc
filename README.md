# The Last Chapter (TLC)

The Last Chapter is a web-based personal library application developed to help readers organize their book collections and keep track of their reading progress. The application allows users to add books, categorize them based on their reading status, and maintain a personal collection in one place.

Users can add book details, upload book cover images from their local device, and assign each book a status: Reading, Completed, or Wishlist. The library displays the saved books as individual cards, with options to view additional details, including reviews. The application uses browser local storage to retain book information between page reloads.

## Features

- **Home:** Provides the main entry point to the application and navigation to its different sections.
- **My Library:** Displays the collection of books added by the user, including book covers, titles, and authors.
- **Add Books:** Allows users to enter book details, upload cover images, and select a reading status.
- **Reading Status:** Organizes books into Reading, Completed, and Wishlist categories.
- **Book Details:** Provides a detailed view of a selected book's information.
- **Reviews:** Allows users to maintain personal reviews associated with their books.
- **Profile:** Provides a dedicated section for the user's profile.
- **Local Data Storage:** Uses the browser's local storage to save book information, including uploaded cover images, so that the data remains available after refreshing the page.

## Technologies Used

- **HTML5** – Structures the application's pages and forms.
- **CSS3** – Handles the layout, styling, and visual presentation.
- **JavaScript** – Implements book management, form interactions, dynamic library rendering, and local data storage.
- **Browser localStorage** – Stores book information on the user's device.
- **GitHub Pages** – Hosts the application online.

## Application Pages

- `index.html` – Home page.
- `library.html` – Displays the user's book collection.
- `addbook.html` – Contains the form for adding books.
- `profile.html` – Profile section of the application.

## Data Storage

The application uses the browser's `localStorage` to store the user's book collection. Book details and cover images are saved locally in the browser, allowing the library to be restored when the application is reopened in the same browser. The application does not require a separate database server for this storage approach.

## Live Demo

[The Last Chapter – Open Website](https://sumedha-glitch519.github.io/tlc/index.html)

