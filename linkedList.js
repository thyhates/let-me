/**
 * Created by thyhates on 2017/4/25.
 */
function LinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };
    let length = 0;
    let head = null;
    this.append = (element) => {
        let node = new Node(element), current;
        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };
    this.removeAt = (position) => {
        if (position > -1 && position < length) {
            let current = head, previous, index = 0;
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
    this.insert = (position, element) => {
        if (position >= 0 && position <= length) {
            let node = new Node(element), current = head, previous, index = 0;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };
    this.toString = () => {
        let current = head, string = '';
        while (current) {
            string += ',' + current.element;
            current = current.next;
        }
        return string.slice(1);
    };
    this.indexOf = (element) => {
        let current = head, index = -1;
        while (current) {
            index++;
            if (element === current.element) {
                return index;
            }
            current = current.next;
        }
        return -1;
    };
    this.remove = (element) => {
        let index = this.indexOf(element);
        this.removeAt(index);
    };
    this.isEmpty = () => length === 0;
    this.size = () => length;
    this.getHead = () => head;
}
let myLinkedList = new LinkedList();
myLinkedList.append('3');
myLinkedList.append('5');
myLinkedList.append('7');
myLinkedList.append('9');
console.log(myLinkedList.indexOf('3'));
console.log(myLinkedList.toString());
console.log(myLinkedList.getHead());

module.exports=LinkedList;
function DoublyLinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };
    let length = 0;
    let head = null;
    let tail = null;
    this.insert =  (element, position) =>{
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous,
                index=0;
            if(position===0){
                if(!head){
                    head=node;
                    tail=node;
                }else{
                    node.next=current;
                    current.prev=node;
                    head=node;
                }
            }else if(position===length){
                current=tail;
                current.next=node;
                node.prev=current;
                tail=node;
            }else{
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                previous.next=node;
                current.prev=node;
                node.prev=previous;
            }
            length++;
            return true;
        }else{
            return false;
        }
    };
    this.removeAt=(position)=>{
        if(position>-1&&position<length){
            let current=head,
                previous,
                index=0;
            if(position===0){
                head=current.next;
                if(length===1){
                    tail=null;
                }else{
                    head.prev=null;
                }
            }else if(position===length-1){
                current=tail;
                tail=current.prev;
                tail.next=null;
            }else{
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
                current.next.prev=previous;
            }
            length--;
            return current.element;
        }else{
            return null;
        }
    };
    this.append=(element)=>{
        let node=new Node(element),current;
        if(head===null){
            head=node;
            tail=node;
        }else{
            tail.next=node;
            node.prev=tail;
            tail=node;
        }
        length++;
    };
    this.toString = () => {
        let current = head, string = '';
        while (current) {
            string += ',' + current.element;
            current = current.next;
        }
        return string.slice(1);
    };
    this.indexOf = (element) => {
        let current = head, index = -1;
        while (current) {
            index++;
            if (element === current.element) {
                return index;
            }
            current = current.next;
        }
        return -1;
    };
    this.remove = (element) => {
        let index = this.indexOf(element);
        this.removeAt(index);
    };
    this.isEmpty = () => length === 0;
    this.size = () => length;
    this.getHead = () => head;
    this.getTail=()=>tail;
}