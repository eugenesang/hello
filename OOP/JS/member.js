export class Member {
    constructor(memberId, name, email, phone, dob, membershipType) {
      this.memberId = memberId;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.dob = dob;
      this.membershipType = membershipType;
      this.borrowedBooks = []; // Array to store borrowed Book objects
      this.fineBalance = 0;
      this.status = "Active"; // Initial status
      this.history = []; // Array to store borrowed book history (e.g., {book: bookObject, returnDate: date})
      this.preferences = {}; // Object to store member preferences (e.g., genres, authors)
    }
  
    // You can add methods here to perform actions on the member object
    // For example:
    borrowBook(book) {
      if (this.status === "Active") {
        this.borrowedBooks.push(book);
        // Update book availability (assuming Book class has a method)
        book.borrowBook();
        return "Book borrowed successfully!";
      } else {
        return "Membership is currently inactive.";
      }
    }
  
    returnBook(book) {
      const borrowedIndex = this.borrowedBooks.findIndex((b) => b === book);
      if (borrowedIndex !== -1) {
        this.borrowedBooks.splice(borrowedIndex, 1);
        // Update book availability (assuming Book class has a method)
        book.available = true;
        // Add book to history with return date
        this.history.push({ book, returnDate: new Date() });
        return "Book returned successfully!";
      } else {
        return "Book was not found in your borrowed list.";
      }
    }
  
    // Add more methods as needed
  }
  
