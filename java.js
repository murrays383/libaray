let myLibrary = [];

let click = {
	clicked: "no",
};

let bookLibrary = document.querySelector("#book-library");

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.rendered = "no"
}

let newBook = document.querySelector("#new-book");
newBook.addEventListener("click", function () {
	if (click.clicked === "no") {
		document.getElementById("create-book").style.visibility = "visible";
		click.clicked = "yes";
	} else {
		document.getElementById("create-book").style.visibility = "hidden";
		click.clicked = "no";
	}
});

let submitButton = document.querySelector("#input-submit");

submitButton.addEventListener("click", function () {
	titleValue = document.getElementById("input-title").value;
	authorValue = document.getElementById("input-author").value;
	pagesValue = document.getElementById("input-pages").value;
	readValue = document.getElementById("input-read");

	if (titleValue !== "" && authorValue !== "" && pagesValue !== "0") {
		if (readValue.checked === true) {
			readValue = "Yes";
		} else {
			readValue = "No";
		}

		let newBook = new Book(titleValue, authorValue, pagesValue, readValue);
		addBooktoLibrary(newBook);

		render();

		document.getElementById("create-book").reset();
	} else {
		alert("Fill in all Fields");
	}
});

let theHobbit = new Book("The Hobbit", "JRR Tolkein", "295", "Yes");
let HarryPotter = new Book("Harry Potter", "JK Rowling", "360", "No");
let WhiteTeeth = new Book("White Teeth", "Zadie Smith", "600", "Yes");
let undergroundRailroad = new Book(
	"Underground Railroad",
	"Colson Whitehead",
	"250",
	"No"
);

addBooktoLibrary(theHobbit);
addBooktoLibrary(HarryPotter);
addBooktoLibrary(WhiteTeeth);
addBooktoLibrary(undergroundRailroad);

function addBooktoLibrary(book) {
	myLibrary.push(book);
}

function render() {
	let newArray = myLibrary.filter(function (book) {
		return book.rendered === "no";
    });
    
    console.log(newArray)

	newArray.map(function (book) {
		book.rendered = "yes";
		let pElement = document.createElement("p");
		let div = document.createElement("div");
		bookLibrary.appendChild(div);
		div.textContent = `${book.title}`;
		pElement.textContent = `${book.read}`;
		pElement.setAttribute("data-type", `${myLibrary.indexOf(book)}`);
		div.setAttribute("id", `${myLibrary.indexOf(book)}`);

		let buttonDelete = document.createElement("button");
		buttonDelete.setAttribute("data-attribute", myLibrary.indexOf(book));
		buttonDelete.setAttribute("class", "button-delete");
		buttonDelete.textContent = "Delete";
		div.appendChild(pElement);
        div.appendChild(buttonDelete);
        
        let buttons = bookLibrary.getElementsByClassName("button-delete");
	arrayDelete = Array.prototype.slice.call(buttons);

	arrayDelete.forEach(function (button) {
		button.addEventListener("click", function () {
			let index = button.getAttribute("data-attribute");
			delete myLibrary[index]
			let div = document.getElementById(index);
			bookLibrary.removeChild(div);
		});
	});

        
        
    });
    

}



	

render();

