# Book Storage

Book Storage is a web application for searching books using a public API and adding them to a database along with personal notes. Users can view their saved books, edit notes, and remove books from their library. The application is developed using Node.js, Express, Axios, JavaScript, EJS, HTML, CSS, and PostgreSQL.

## Features
- Search for books using a public API
- Add books to the database with personal notes
- View saved books
- Edit notes for saved books
- Delete books from the library

## Technologies
- **Node.js**: Server-side JavaScript runtime
- **JavaScript (JS)**: Programming language for the frontend and backend logic
- **EJS**: Embedded JavaScript templates for rendering dynamic HTML
- **Express**: Web framework for Node.js
- **PostgreSQL**: Relational database management system
- **Axios**: Promise-based HTTP client for making API requests
- **HTML/CSS**: Markup and styling for the frontend

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/MarcelBasa/Book-storage.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Book-storage
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Set up your PostgreSQL database and configure the connection in the `index.js` file.
5. Run the database migrations to set up the required tables.
6. Start the application:
    ```sh
    node index.js
    ```
7. Open your browser and go to `http://localhost:3000` to use the application.

## How to Use
- Use the search form to find books from the public API.
- Add a book to your library by clicking the "Add to Library" button and including a personal note.
- View your saved books on the library page.
- Edit the notes for any saved book by clicking the "Edit" button.
- Remove a book from your library by clicking the "Delete" button.

## Example Usage
- Users can search for books by title using the public API www.openlibrary.org.
- Once a book is found, it can be added to the library personal library with an optional note.
- The user can view all saved books in their library, update the notes, and remove books as needed.

### Home Page
![homePage](https://github.com/user-attachments/assets/958c4400-7668-4d74-929a-9304baf5d16e)
### Search Page
![searchPage](https://github.com/user-attachments/assets/287af6f5-cec3-4a70-a98a-852c765af984)
