export class Loan {
    constructor(loanId, memberId, bookISBN, loanDate, dueDate) {
      this.loanId = loanId;
      this.memberId = memberId;
      this.bookISBN = bookISBN;
      this.loanDate = loanDate;
      this.dueDate = dueDate;
      this.returnDate = null;
      this.fineAmount = 0;
      this.status = "On Loan";
      this.renewalCount = 0;
      this.renewalLimit = 2; // Example limit
      this.checkoutInfo = {}; // Object for checkout details (librarian ID, location)
      this.returnInfo = {}; // Object for return details (librarian ID, location)
    }
  
    // You can add methods here to perform actions on the loan object
    // For example:
    markReturned(returnDate) {
      this.returnDate = returnDate;
      this.status = "Returned";
      // Calculate and potentially apply fines based on return date and due date
    }
  
    renewLoan() {
      if (this.renewalCount < this.renewalLimit && this.status === "On Loan") {
        this.dueDate = calculateNewDueDate(this.dueDate); // Implement logic to calculate new due date
        this.renewalCount++;
        return "Loan renewed successfully!";
      } else {
        return "Loan cannot be renewed.";
      }
    }
  
    // Add more methods as needed
  }