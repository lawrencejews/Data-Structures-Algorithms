// Class representing a Stack

class Stack {
    constructor() {
        this._storage = {};
        this._length = 0;
    }

    // Add a value at the end of the stack.
    push(value) {
        this._storage[this._length] = value;
        this._length++;
    }

    // Remove the value at the end of the stack. 
    //Returns the last value and newest value on the stack.
    pop() {
        // what it if it's empty?
        const lastVal = this._storage[this._length - 1];
        this._storage[this._length - 1] = undefined;
        this._length--;
        return lastVal
    }
    
    //Returns the value at the end of the stack without removing it.
    peek() {
        if (this._length) {
            return this._storage[this._length - 1]
        }
    }
}

const myStack = new Stack();
console.log(myStack);