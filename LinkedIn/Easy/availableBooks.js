// need to create a book class that creates different information about books in the store.
/* 
1. Title
2. Author
3. ISBN
4. numCopies
getAvailability() => "out of stock" if 0
available copies, "low stock" if < 10 copies
and "in stock" otherwise

also need a function for selling a book
sell(numSold)

also want a restock function
restock(numCopies)
*/

/* Function Component
// 1. anything you can write as a class you can write as a function. Start as a function then we will rewrite as a class
function Book(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
}

// 2. declare the getAvailability function on the prototype

Book.prototype.getAvailability = function() {
    if (this.numCopies === 0) {
        return "Out of stock";
    } else if (this.numCopies < 10) {
        return "Low stock";
    }
    return "In stock";
}

Book.prototype.sell = function(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
}

Book.prototype.restock = function(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
}
*/

class Book{
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this. ISBN = ISBN;
        this.numCopies = numCopies;
    }

    get availability() {
        return this.getAvailability();
    }

    getAvailability() {
        if (this.numCopies === 0) {
            return "Out of stock";
        } else if (this.numCopies < 10) {
            return "Low stock";
        }
        return "In stock";
    }

    sell(numCopiesSold = 1) {
        this.numCopies -= numCopiesSold;
    }

    restock(numCopiesStocked = 5) {
        this.numCopies += numCopiesStocked;
    }
}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.getAvailability());
HungerGames.restock(12);
console.log(HungerGames.getAvailability());
HungerGames.sell(17);
console.log(HungerGames.getAvailability());