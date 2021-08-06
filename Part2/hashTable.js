// Class representing a Hash Table

class HashTable {
    constructor(val) {
        this._storage = [];
        this._tableSize = val;
    }
    
    //Insert a new key-value pair.
    insert(key ,value) {
        const index = this._hash(key, this._tableSize);

        // Handling a collision to avoid loosing data to overwriting.
        if (!this._storage[index]) {   
            this._storage[index] = [];
        }
        //TODO: looping through array and find if key was already inserted.
        this._storage[index].push([key, value]);
    }

    //Deletes key-value pair.
    remove() {
        
    }

    //Returns the value associated with a key.
    retrieve(key) {
        const index = this._hash(key, this._tableSize);
        
        const arrayAtIndex = this._storage[index]
        if (arrayAtIndex) {
            for (let i = 0; i < arrayAtIndex.length; i++){
                const keyValueArray = arrayAtIndex[i];
                if (keyValueArray[0] === key) return keyValueArray[1];
            }
        }
    }

    //Hashes string value into an integer that can be mapped to an array index.
    _hash(str, n) {
        let sum = 0;
        for (let i = 0; i < str.length; i++){
            sum += str.charCodeAt(i) * 3
        }
        return sum % n;
    }
}
const myHashtable = new HashTable(25);

myHashtable.insert('a', 1);
myHashtable.insert('b', 2)
console.log(myHashtable);
