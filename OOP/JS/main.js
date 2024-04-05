import { Member } from "./member.js";
import { Loan } from "./loan.js";
import { Book } from "./book.js";

const user = new Member(0, "John Doe", "john.doe@gmail.com", "254712345689", "17/12/1999", "Regular");

const book =  new Book("The Caucasian Chalk Circle", ["Bertolt Brecht"], 12345678, "Longhorn", "18/12/1945", "Thriller", "English", 1, "", 123, "Play", true, "Berlin, Germany", ["Caucasian", "war", "Justice"], "");

const loan = new Loan(1, user.memberId, book.isbn, "6/4/2024", "6/5/2024");

console.log(user);

console.log(book);

console.log(loan);