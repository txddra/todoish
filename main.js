// Make your global todos array here.
// Put a few todos in there to start with!
// This is mostly to give us some data to test our functions with.
const todos = [
    `Clean.`,
    `Code`,
    `Sleep`,
    `Eat`
];

// Now test it here just by console.logging a particular todo index.
console.log(todos[1]);

// Next: a function that prints a todo.
// For now, just have this function console log the value passed in!
// (We'll expand this helper later.)

function printTodo(todo) {
    console.log(todo);
  }
  

// Below, call your printTodo with a value of any kind. All it will do is console.log it,
// but soon we'll do more with it!
printTodo('take a nap')
// Now write a function that prints everything on our todo list, INDIVIDUALLY.
// Make SURE to use the above printTodo function!
function printList() {
    for (const todo of todos) {
      printTodo(todo);
    }
  }

//Now test it out by calling your print-everything function. It should print out each item from your todo list array.

printList();
// Now please write a function that adds an item to our todo list.
// Could add it anywhere! We'll talk about where it should be added eventually.
function addTodo(todo){
    todos.push();
}

// Test the above function by calling it with a value,
// then calling your print-everything function and making sure it's in there.
addTodo('have some fun');
printList();

// Now write a function that removes an item at a given index from our todo list.
function removeTodo(i){
    todo.splice(i, 1);

}

// Test the above function by passing it an index, then calling our print-everything
// function to see if the correct thing was removed.
  removeTodo(0);
  printList();

// Lastly: write a function that clears all items from our array.

function clearAll() {
    todos.splice(0);
  }
// Test it by calling it and then calling your print-everything function.
// Nothing should print because the array should be empty now!
clearAll();
console.log(todos);
printList();