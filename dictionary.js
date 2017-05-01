/**
 * Created by thyhates on 2017/4/30.
 */
'use strict';

function Dictionary() {
    let items={};

    this.has=key=>items.hasOwnProperty(key);


    this.set=(key,value)=>{
        items[key]=value;
    };

    this.remove=key=>{
        if(this.has(key)){
            delete items[key];
            return true;
        }
        return false;
    };

    this.get=key=>this.has(key)?items[key]:undefined;

    this.values=()=>{
      let values=[];
      for(let k in items){
          if(this.has(k)){
              values.push(items[k]);
          }
      }
      return values;
    };

    this.clear=()=>{
        items={};
    };

    this.size=()=>Object.keys(items).length;

    this.keys=()=>Object.keys(items);

    this.getItems=()=>items;

}

let dictionary=new Dictionary();
dictionary.set('Gandalf','gandalf@email.com');
dictionary.set('John','john@email.com');
dictionary.set('Tyrion','tyrion@email.com');

console.log(dictionary.has('Gandalf'));
console.log(dictionary.size());

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));

dictionary.remove('John');

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());
module.exports=Dictionary;