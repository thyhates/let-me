/**
 * Created by thyhates on 2017/4/24.
 */
function Stack() {
    let items=[];
    this.push=(element)=>{
        items.push(element);
    };
    this.pop=()=>{
        return items.pop();
    };
    this.peek=()=>items[items.length-1];
    this.isEmpty=()=>items.length===0;
    this.size=()=>items.length;
    this.clear=()=>{
        items=[];
    };
    this.print=()=>{
        console.log(items.toString());
    }
}
let stack=new Stack();
stack.push(5);
stack.push(8);
console.log(stack.peek());
stack.push(13);
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size());
stack.print();

function divideBy2(decNumber) {
    let remStack=new Stack(),rem,binaryString='';
    while(decNumber>0){
        rem=Math.floor(decNumber%2);
        remStack.push(rem);
        decNumber=Math.floor(decNumber/2);
    }
    while(!remStack.isEmpty()){
        binaryString+=remStack.pop().toString();
    }
    return binaryString;
}
console.log(divideBy2(10));
console.log(divideBy2(2333));
function baseConverter(decNumber, base) {
    let remStack=new Stack(),rem,binaryString='',digits='0123456789ABCDEF';
    while(decNumber>0){
        rem=Math.floor(decNumber%base);
        remStack.push(rem);
        decNumber=Math.floor(decNumber/base);
    }
    while(!remStack.isEmpty()){
        binaryString+=digits[remStack.pop()];
    }
    return binaryString;
}
console.log(baseConverter(2341,8));
console.log(baseConverter(100345,16));
module.exports=Stack;