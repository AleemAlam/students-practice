const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const readLine = require("readline");
const interface = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const books = ["Harry Potter", "Two States", "NCRT"];
function showBooks() {
  console.log(books.join("\n"));
}
eventEmitter.on("questions", () => {
  interface.question(
    "1: Show All Books. \n2: Add Book. \n3: Quit.\n",
    (res) => {
      eventEmitter.emit("books", res);
    }
  );
});

eventEmitter.on("books", (res) => {
  if (res == 1) {
    showBooks();
    eventEmitter.emit("questions");
  } else if (res == 2) {
    interface.question("Enter a new Book\n", (bookName) => {
      books.push(bookName);
      eventEmitter.emit("questions");
    });
  } else if (res == 3) {
    interface.close();
  } else {
    console.log("Please Enter a valid input");
    eventEmitter.emit("questions");
  }
});
// interface.on("close", () => {
//   console.log("Exit");
//   process.exit(0);
// });
eventEmitter.emit("questions");
