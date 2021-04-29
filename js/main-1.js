

//===================== Query Selector : uses CSS selector to grab an element

var wrap = document.querySelector("#wrapper");
console.log(wrap);

var myLi = document.querySelector("#book-list li:nth-child(2) .name");
console.log(myLi);

//=================== node list
var books = document.querySelectorAll("#book-list li .name");
console.log(books);

// for(let i = 0; i < books.length; i++){
	//console.log(books[i]);
// }

// books.forEach(function(book){
	// console.log(book.textContent);
// })


// ================  Casting a NodeList into an Array
// console.log(Array.from(books));

// books.forEach((book)=>{
	// console.log(book.textContent);
	// book.textContent = "TEST";
	// book.textContent += " (Book Title)";
// })


// var bookList = document.querySelector("#book-list");
// console.log(bookList);
// bookList.innerHTML = "<h2>Books and more books ....</h2>";

// bookList.innerHTML += "<p>This is how we append into an element</p>";


//=============================== DOM node
// var banner = document.querySelector("#page-banner");
// console.log(banner);
// console.log("page-banner node type is " + banner.nodeType);
// console.log("page-banner node name is " + banner.nodeName);
// console.log("page-banner node has child node? " + banner.hasChildNodes());

// var clonedBanner  = banner.cloneNode(true);
// console.log(clonedBanner);

//============================== child - parent - sibling node
var bookList = document.querySelector("#book-list");
//================== 1- Parent

console.log("The Parent node is " + bookList.parentNode);
console.log("The Parent node is " + bookList.parentElement.parentElement);

//================== 2- Child

console.log("The child node is " + bookList.childNodes);
console.log("The children nodes are " + bookList.children);

//=================== 3- Sibling
console.log("book-list next sibling is " + bookList.nextSibling); //because of line break
console.log("book-list next sibling element is " + bookList.nextElementSibling);
console.log("book-list previous sibling element is " + bookList.previousElementSibling);

// ====================== Append into the DOM

bookList.previousElementSibling.querySelector("p").innerHTML += "<p>Too cool for everyone</p>"
















