/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this._queue = new Array(k);
    this._length = k;
    this._head = -1;
    this._tail = -1;
    this._size = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if(this.isEmpty()){
        this._head++;
        this._tail++;
        this._queue[this._tail] = value;
        this._size++;
        return true;
    }else if(this.isFull()){
        return false;
    }else{
        this._tail++;
        if(this._tail===this._length){
            this._tail =0;
        }
        this._queue[this._tail] = value;
        this._size++;
        return true;
    }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if(this.isEmpty()){
        return false;
    }else{
        this._queue[this._head] = undefined;
        if(this._head === this._tail){
            this._head = -1;
            this._tail = -1;
        }else{
            this._head++;
            if(this._head===this._length){
                this._head=0;
            }
        }
        this._size--;
        return true;
    }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    return this._queue[this._head]===undefined?-1:this._queue[this._head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    return this._queue[this._tail]===undefined?-1:this._queue[this._tail];
};
MyCircularQueue.prototype.clear = function () {
    this._queue = new Array(this._length);
    this._size = 0;
};
/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return (this._head === -1 && this._tail === -1)
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    if(this._tail===(this._length-1)){
        return this._head===0;
    }else{
        var tail = this._tail+1;
        if(tail===this._length){
            tail = 0;
        }
        return tail===this._head;
    }
};
MyCircularQueue.prototype.size = function () {
    return this._size;
};
// Your MyCircularQueue object will be instantiated and called as such:
var queue = new MyCircularQueue(4);
console.log(queue.enQueue(3));
console.log('size:',queue.size());
console.log(queue.Front());
console.log(queue.isFull());
console.log(queue.enQueue(7));
console.log('size:',queue.size());
console.log(queue.enQueue(2));
console.log('size:',queue.size());
console.log(queue.enQueue(5));
console.log('size:',queue.size());
console.log(queue.deQueue());
console.log('size:',queue.size());
console.log(queue.enQueue(4));
console.log('size:',queue.size());
console.log(queue.enQueue(2));
console.log('size:',queue.size());
console.log(queue.isEmpty());
console.log(queue.Rear());
console.log(queue.clear());
console.log('size:',queue.size());
console.log(queue.Rear());
