class Book {
    #title;
    #author;
    #isAvailable;

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
        this.#isAvailable = true;
    }

    getTitle() {
        return this.#title;
    }

    getAuthor() {
        return this.#author;
    }

    isAvailable() {
        return this.#isAvailable;
    }

    checkoutBook() {
        this.#isAvailable = false;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        if (book instanceof Book) {
            this.books.push(book);
        } else {
            console.error("Invalid input: Only books can be added.");
        }
    }

    checkoutBook(title) {
        let found = false;
        for (let book of this.books) {
            if (book.getTitle() === title) {
                found = true;
                if (book.isAvailable()) {
                    book.checkoutBook();
                    console.log(`Ви взяли книгу "${book.getTitle()}" автора ${book.getAuthor()}.`);
                    return;
                } else {
                    console.log(`Вибачте, "${book.getTitle()}" недоступна.`);
                    return;
                }
            }
        }
        if (!found) {
            console.log(`Вибачте, книгу з назвою "${title}" не знайдено в бібліотеці.`);
        }
    }

    viewAvailableBooks() {
        console.log("Доступні книги:");
        let availableBooks = this.books.filter(book => book.isAvailable());

        if (availableBooks.length === 0) {
            console.log("Наразі немає доступних книг.");
        } else {
            for (let book of availableBooks) {
                console.log(`- "${book.getTitle()}" автора ${book.getAuthor()}`);
            }
        }
    }
}

const myLibrary = new Library();

const book1 = new Book("Кобзар", "Тарас Шевченко");
const book2 = new Book("Тіні забутих предків", "Михайло Коцюбинський");
const book3 = new Book("Лісова пісня", "Леся Українка");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.viewAvailableBooks();
myLibrary.checkoutBook("Тіні забутих предків");
myLibrary.checkoutBook("Тіні забутих предків");


