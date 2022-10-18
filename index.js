"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
//--------------Number Guessing Game----------//
// function guessNumber() : void {
//   // generating a random integer from 1 to 10
//   const random :number = Math.floor(Math.random() * 10) + 1;
//   // take input from the user
//   let Num : number = question('Choose a number between 1 to 10:\n');
//   // take the input until the guess is correct
//   if (random === Num) {
//      console.log("You guessed the correct number.");
//   }
//   // check if the guess is correct
// else {
//       console.log('OPPs! you are wrong Lets try again');
//       guessNumber();
//   }
// }
// // call the function
// guessNumber();
//----------ATM---------------//
// function Atm() : void {
//   let Id : string | number = question('Enter user ID:\n');
//   let Pin : number = question('Enter your pin code:\n');
//   console.log('Your Account functionalities are successfully unlocked');
//   console.log ("ID " + Id);
//   console.log("Pin " + Pin);
// }
// Atm();
var TodoStructure = /** @class */ (function () {
    function TodoStructure(id, input, status) {
        this.id = id;
        this.input = input;
        this.status = status;
    }
    return TodoStructure;
}());
// we define format of todos as TodoStructure
var AppState = /** @class */ (function () {
    function AppState() {
        this.todos = [];
    }
    AppState.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AppState();
        return this.instance;
    };
    //addTodo
    AppState.prototype.addTodo = function (id, input, status) {
        var todoItem = new TodoStructure(id, input, status);
        this.todos.push(todoItem);
        //console.log(this.todos);
    };
    Object.defineProperty(AppState.prototype, "Todos", {
        //get method - to access todoList  
        get: function () {
            return this.todos;
        },
        //set method - set todoItems after it is edited/deleted
        set: function (todoItems) {
            this.todos = __spreadArray([], todoItems, true);
        },
        enumerable: false,
        configurable: true
    });
    return AppState;
}());
var appState = AppState.getInstance();
