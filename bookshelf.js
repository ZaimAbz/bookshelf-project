function addTextNode() {
  var button = document.createElement("button");
  button.setAttribute(`id`, `fetch-books-btn`);
  document.body.appendChild(button);
  button.appendChild(document.createTextNode(`Fetch Books`));
  button.addEventListener("click", fetchBooks);
}

function fetchBooks() {
  const booksJSON =
    "https://raw.githubusercontent.com/codeyourfuture/bookshelf-project/master/books.json";
  fetch(booksJSON)
    .then(response => response.json())
    .then(processBooks)
    .then(removeBtn)
    .then(organiseShelf);
}

function processBooks(JSON) {
  var ulList = document.createElement("ul");
  ulList.setAttribute("id", "book-list");
  document.body.appendChild(ulList);
  JSON.forEach(function(item, index) {
    var message = `${item.title} by ${item.author}`;
    var createLi = document.createElement("li");
    createLi.setAttribute("id", index + 1);
    createLi.appendChild(document.createTextNode(message));
    ulList.appendChild(createLi);
  });
  orderBtn();
}

function removeBtn() {
  var removeBtn = document.getElementById(`fetch-books-btn`);
  removeBtn.removeEventListener("click", fetchBooks);
  removeBtn.remove();
}
addTextNode();

function orderBtn() {
  var orderItems = document.querySelectorAll("li");
  orderItems.forEach(function(item) {
    item.insertAdjacentHTML(
      "afterbegin",
      "<button>⬆</button><button>⬇</button> &nbsp;"
    );
  });
}
function moveUp(id) {
  console.log(`move up ${id}`);
}
function moveDown(id) {
  console.log(`move Down ${id}`);
}

function organiseShelf() {
  var parentUl = document.getElementById("book-list");
  parentUl.addEventListener("click", function(e) {
    moveUp(e.target.textContent);
    moverDown(e.target.textContent);
  });
}
