import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "BooksDB",
    password: "123456",
    port: 5432,
  });
  
db.connect();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

async function getAllBooks(){
    try{
        const resultBooks = await db.query("SELECT * FROM Books ORDER BY id ASC");
        return resultBooks.rows;
    } catch(err) {
        console.log(err);
    }
}

app.get("/", async (req, res) => {
    const books = await getAllBooks();
    res.render("index.ejs", {
        books: books,
    });
});

app.get("/index.ejs", (req, res) => {
    res.redirect("/");
});

app.get("/search.ejs", (req, res) => {
    res.render("search.ejs");
});

app.post("/search", async (req, res) => {
    try{
        const title = req.body.Title;
        const resultBook = await axios.get(`https://openlibrary.org/search.json?title=${title}`);
        if(resultBook.data.docs.length <= 0){
            throw "This book doesn't exist";
        } else {
            res.render("search.ejs", {
                book: resultBook,
            });
        }
    } catch(err) {
        console.log(err);
        res.render("search.ejs", {
            error: err,
        })
    }
});

app.post("/add", async (req, res) => {
    const fullTitle = req.body.Title;
    const author = req.body.Author;
    const date = req.body.Date;
    const cover = req.body.Cover_id;
    const note = req.body.Note;
    try{
        const result = await db.query("INSERT INTO books (title, note, author, date, cover_id) values ($1, $2, $3, $4, $5)", 
            [fullTitle, note, author, date, cover]
        );
    } catch(err) {
        console.log(err);
    }
    res.redirect("/");
});

app.delete("/delete/:cover_index", async (req, res) => {
    const cover_id = req.params.cover_index;
    try{
        const result = await db.query("DELETE FROM books WHERE cover_id = $1", 
            [cover_id]
        );
    } catch(err) {
        console.log(err);
    }
    res.redirect("/");
});

app.get("/edit/:cover_index", async (req, res) => {
    const cover_id = req.params.cover_index;
    try{
        const result = await db.query("SELECT * FROM books WHERE cover_id = $1", 
            [cover_id]
        );
        res.render("edit.ejs", {
            book: result.rows[0],
        });
    } catch(err) {
        console.log(err);
    }
});

app.post("/edit/:cover_index", async (req, res) => {
    const cover_id = req.params.cover_index;
    const editNote = req.body.Note;
    try{
        const result = await db.query("UPDATE books SET note = $2 WHERE cover_id = $1", 
            [cover_id, editNote]
        );
    } catch(err) {
        console.log(err);
    }
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server working on port: ${port}`);
});
