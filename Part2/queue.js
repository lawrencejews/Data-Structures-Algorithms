//Class representing a Queue.

class Queue {
    constructor() {
        this._storage = {};
        this._length = 0;
        this._headIndex = 0;
    }

    //Enqueues a new value at the end of the queue.
    enqueue(value) {
        //TODO: argument validation
        const lastIndex = this._length + this._headIndex;
        this._storage[lastIndex] = value;
        this._length++;
    }

    //Dequeues the value from the beginning of the queue and returns it.
    dequeue() {
        if (this._length) {
            const firstVal = this._storage[this._headIndex];
            delete this._storage[this._headIndex];
            this._length--;
            this._headIndex++;
            return firstVal;
        }
    }

    //Returns the value at the beginning of the queue without removing it from the queue.
    peek() {
        
    }
}

const myQueue = new Queue();
myQueue.enqueue('zero');
myQueue.enqueue('one');
myQueue.enqueue('two');


//myQueue.dequeue();
console.log(myQueue);