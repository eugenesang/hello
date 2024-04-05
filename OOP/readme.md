# Hands On Practice

Lets try to create classes in different languages

## Topic: Library System

We will create an hypothetical Library System for practice

## Classes

- Book
- Member
- Loan

## Class Attributes

### Book

1. **Title:** The title of the book.
2. **Author(s):** The author or authors of the book.
3. **ISBN:** International Standard Book Number, a unique identifier for books.
4. **Publisher:** The company or entity that published the book.
5. **Publication Date:** The date when the book was published.
6. **Genre/Category:** The category or genre the book belongs to (e.g., fiction, non-fiction, fantasy, mystery, etc.).
7. **Language:** The language in which the book is written.
8. **Edition:** The edition of the book, if applicable.
9. **Synopsis/Description:** A brief summary or description of the book's content.
10. **Number of Pages:** The total number of pages in the book.
11. **Format:** Whether it's a hardcover, paperback, ebook, etc.
12. **Availability:** Whether the book is available for borrowing or currently checked out.
13. **Location:** The physical location of the book in the library (e.g., shelf number or section).
14. **Keywords/Tags:** Additional keywords or tags to help with searching and categorization.
15. **Cover Image:** An image representing the book's cover.

### Member

- **Member ID:** A unique identifier for each member.
- **Name:** The name of the member.
- **Address:** The member's address.
- **Email:** The member's email address.
- **Phone Number:** The member's contact phone number.
- **Date of Birth:** The member's date of birth.
- **Membership Type:** The type of membership (e.g., student, faculty, regular, premium).
- **Membership Start Date:** The date when the membership started.
- **Membership Expiry Date:** The date when the membership expires.
- **Borrowed Books:** A list of books currently borrowed by the member.
- **Fine Balance:** Any outstanding fines owed by the member.
- **Membership Status:** Active, inactive, suspended, etc.
- **History of Borrowed Books: A record of books previously borrowed by the member.
- **Preferences:** Any preferences the member has expressed (e.g., favorite genres, preferred authors).

### Loans

- **Loan ID:** A unique identifier for each loan transaction.
- **Member ID:** The ID of the member borrowing the book.
- **Book ISBN:** The ISBN of the book being borrowed.
- **Loan Date:** The date when the book was borrowed.
- **Due Date:** The date by which the book should be returned.
- **Return Date:** The date when the book was returned (if applicable).
- **Fine Amount:** Any fines incurred for late return.
- **Loan Status:** Whether the book is currently on loan or returned.
- **Renewal Count:** Number of times the loan has been renewed (if applicable).
- **Renewal Limit:** The maximum number of times a loan can be renewed.
- **Checkout Information:** Additional information related to the checkout process (e.g., librarian ID, checkout location).
- **Return Information:** Additional information related to the return process (e.g., librarian ID, return location).
