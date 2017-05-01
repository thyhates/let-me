/**
 * Created by thyhates on 2017/4/30.
 */
'use strict';

const LinkedList = require('linkedList');

function HashTable() {
    let table = [];
    let loseloseHashCode = key => {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    /*this.put =(key,value)=>{
     let position=loseloseHashCode(key);
     console.log(position+' - '+key);
     table[position]=value;
     };*/

    this.put = (key, value) => {
        let position = loseloseHashCode(key);
        if (table[position] === undefined) {
            table[position] = new LinkedList();
        }
        table[position].append(new ValuePair(key, value));
    };

    // this.get=key=>table[loseloseHashCode(key)];

    this.get = key => {
        let position = loseloseHashCode(key);
        if (table[position] !== undefined) {
            let current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;
    };

    // this.remove=key=>{
    //     table[loseloseHashCode(key)]=undefined;
    // };

    this.remove = (key) => {
        let position = loseloseHashCode(key);
        if (table[position] !== undefined) {
            let current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false;
    };

    this.print = () => {
        for (let i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + ':' + table[i]);
            }
        }
    };

    let ValuePair = (key, value) => {
        this.key = key;
        this.value = value;

        this.toString = () => {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    };
}

let hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'john@email.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash.get('Gandalf'));
console.log(hash.get('Loiance'));