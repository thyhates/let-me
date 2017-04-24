/**
 * Created by thyhates on 2017/4/24.
 */
function Queue() {
    let items=[];
    this.enqueue=(element)=>{
        items.push(element);
    };
    this.dequeue=()=>items.shift();
    this.front=()=>items[0];
    this.isEmpty=()=>items.length===0;
    this.size=()=>items.length;
    this.print=()=>{
        console.log(items.toString());
    };
    this.clear=()=>{
        items=[];
    };
}

module.exports=Queue;
let queue=new Queue();
console.log(queue.isEmpty());
queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.print();
function PriorityQueue() {
    let items=[];
    function QueueElement(element, priority) {
        this.element=element;
        this.priority=priority;
    }
    this.enqueue=function (element, priority) {
        let queueElement=new QueueElement(element,priority);
        if(this.isEmpty()){
            items.push(queueElement);
        }else{
            let added=false;
            for(let i=0;i<items.length;i++){
                if(queueElement.priority<items[i].priority){
                    items.splice(i,0,queueElement);
                    added=true;
                    break;
                }
            }
            if(!added){
                items.push(queueElement);
            }
        }
    };
    this.dequeue=()=>items.shift();
    this.front=()=>items[0];
    this.isEmpty=()=>items.length===0;
    this.size=()=>items.length;
    this.print=()=>{
        let printQueue=items.map(function (item) {
            return item.element;
        });
        console.log(printQueue.toString());
    };
    this.clear=()=>{
        items=[];
    };
}
let priorityQueue=new PriorityQueue();
priorityQueue.enqueue('John',2);
priorityQueue.enqueue('Jack',1);
priorityQueue.enqueue('Camila',1);
console.log('-'.repeat(15));
priorityQueue.print();