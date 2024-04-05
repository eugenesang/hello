class Book:
    def __init__(self, title, authors, isbn, publisher, publication_date, genre, language, edition, synopsis, pages, format, available, location, keywords, cover_image):
        self.title = title
        self.authors = authors  # Can be a list of author names
        self.isbn = isbn
        self.publisher = publisher
        self.publication_date = publication_date
        self.genre = genre
        self.language = language
        self.edition = edition
        self.synopsis = synopsis
        self.pages = pages
        self.format = format
        self.available = available
        self.location = location
        self.keywords = keywords  # Can be a list of keywords
        self.cover_image = cover_image

    # You can add methods here to perform actions on the book object
    # For example:
    def get_display_info(self):
        return f"Title: {self.title}\nAuthor(s): {', '.join(self.authors)}\nISBN: {self.isbn}\n..."


    def borrow_book(self):
        if self.available:
            self.available = False
            return "Book borrowed successfully!"
        else:
            return "Book is currently unavailable."

    # Add more methods as needed