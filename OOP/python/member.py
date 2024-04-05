import datetime

class Member:
    def __init__(self, member_id, name, email, phone, dob, membership_type):
        self.member_id = member_id
        self.name = name
        self.email = email
        self.phone = phone
        self.dob = dob
        self.membership_type = membership_type
        self.borrowed_books = []  # List to store borrowed Book objects
        self.fine_balance = 0
        self.status = "Active"  # Initial status
        self.history = []  # List to store borrowed book history (e.g., {'book': book_object, 'return_date': date})
        self.preferences = {}  # Dictionary to store member preferences (e.g., genres, authors)

    # You can add methods here to perform actions on the member object
    # For example:
    def borrow_book(self, book):
        if self.status == "Active":
            self.borrowed_books.append(book)
            # Update book availability (assuming Book class has a method)
            book.borrow_book()
            return "Book borrowed successfully!"
        else:
            return "Membership is currently inactive."

    def return_book(self, book):
        borrowed_index = -1
        for i, b in enumerate(self.borrowed_books):
            if b == book:
                borrowed_index = i
                break

        if borrowed_index != -1:
            del self.borrowed_books[borrowed_index]
            # Update book availability (assuming Book class has a method)
            book.available = True
            # Add book to history with return date
            self.history.append({'book': book, 'return_date': datetime.now()})
            return "Book returned successfully!"
        else:
            return "Book was not found in your borrowed list."

    # Add more methods as needed
