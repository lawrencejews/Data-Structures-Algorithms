// Class representing a Linked list

class LinkedList {
    constructor(value) {
        this.head = { value, next: null };
        this.tail = this.head;
    }

    // Insert a new value to the end of the linked list
    insert(value) {
        //update tail
        const node = { value, next: null };
        this.tail.next = node;
        this.tail = node;
    }

    // Deletes the node
    remove() {
        
    }

    // Remove the value at the end of the linked list
    removeTail() {
        //loop and find the node before the tail
        let currentNode = this.head;
        while (currentNode.next !== this.tail) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
    }

    //Searches the linked list and returns true if it contains the value passed.
    // linear time complexity.
    contains(value) {
        let currentNode = this.head;
        while (currentNode.value !== value) {
            currentNode = currentNode.next;
        }
        return currentNode.value === value;
    }

    // Checks if a node is the head of the linked list
    isHead(node) {
        return node === this.head;
    }

    // Check if a node is the tail of the linked list
    isTail(node) {
        return node === this.tail;
    }
}

const myList = new LinkedList(1); // initiate with a value or empty..
console.log(myList);