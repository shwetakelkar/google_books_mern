import axios from "axios";

export default {
  // Gets all books
  getBooks: function(title,author) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+title+"+inauthor:"+author);
  },
  
  getAllSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
  
};