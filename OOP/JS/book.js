export class Book {
    constructor(title, authors, isbn, publisher, publicationDate, genre, language, edition, synopsis, pages, format, available, location, keywords, coverImage) {
      this.title = title;
      this.authors = authors; // Can be an array of author names
      this.isbn = isbn;
      this.publisher = publisher;
      this.publicationDate = publicationDate;
      this.genre = genre;
      this.language = language;
      this.edition = edition;
      this.synopsis = synopsis;
      this.pages = pages;
      this.format = format;
      this.available = available;
      this.location = location;
      this.keywords = keywords; // Can be an array of keywords
      this.coverImage = coverImage;
    }
  
    // You can add methods here to perform actions on the book object
    // For example:
    getDisplayInfo() {
      return `Title: ${this.title}\nAuthor(s): ${this.authors.join(", ")}\nISBN: ${this.isbn}\n...`; // Add more details as needed
    }
  
    borrowBook() {
      if (this.available) {
        this.available = false;
        return "Book borrowed successfully!";
      } else {
        return "Book is currently unavailable.";
      }
    }
  
    // Add more methods as needed
  }
  