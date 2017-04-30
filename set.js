/**
 * Created by thyhates on 2017/4/30.
 */
'use strict';

function Set() {
    let items={};
    this.has=(value)=>items.hasOwnProperty(value);

    this.add=(value)=>{
        if(!this.has(value)){
            items[value]=value;
            return true;
        }
        return false;
    };

    this.remove=(value)=>{
        if(this.has(value)){
            delete items[value];
            return true;
        }
        return false;
    };

    this.clear=()=>{
        items={};
    };

    this.size=()=>Object.keys(items).length;

    this.values=()=>Object.keys(items);

    this.union=(otherSet)=>{
        let unionSet=new Set();
        let values=this.values();
        for(let i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }
        values=otherSet.values();
        for(let i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    };

    this.intersection=(otherSet)=>{
        let intersectionSet=new Set();
        let values=this.values();
        for(let i=0;i<values.length;i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    };

    this.differenceSet=(otherSet)=>{
        let differenceSet=new Set();
        let values=this.values();
        for(let i=0;i<values.length;i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    };

    this.subset=(otherSet)=>{
       if(this.size()>otherSet.size()){
           return false;
       }else{
           let values=this.values();
           for(let i=0;i<values.length;i++){
               if(!otherSet.has(values[i])){
                   return false;
               }
           }
           return true;
       }
    };
}

module.export =Set;

let setA=new Set();
setA.add(1);
setA.add(2);
let setB=new Set();
setB.add(4);
setB.add(2);
setB.add(1);
setB.add(5);
let setAB=setA.subset(setB);
console.log(setAB);
