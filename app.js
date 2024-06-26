// *************EX-1****************************
class stack{
    constructor(){
        this.data = [];  
    }

    push(val){
      this.data.push(val);
    }
    stackCount(){
        return this.data.length;
    }
    pop(){
        if(this.data.length==null)
        return "not data";
    return this.data.pop();
    }

    peek(){
        return this.data[this.data.length-1];
    }

    printStack(){
         return this.data;
        
    }


    reverse(){
        let array=[];
                
        for(let i=this.data.length-1; i>=0; i--){
            array.push(this.data[i]);
        } 
        this.data=array;
        return this.data;
    }

}

let array = [18,10,89,50,5,6];

let stack1 = new stack();
stack1.push(5);
stack1.push(90);
stack1.push(30);
stack1.push(45);
stack1.printStack()
console.log("the satack " + stack1.printStack());
console.log("the peek " + stack1.peek());
console.log("reverse "+stack1.reverse());
console.log("the peek " + stack1.peek());
console.log(" count "+stack1.stackCount());
console.log("****************************************************************");

// *************EX-3****************************
function isInt(val) {
    return val % 1 === 0;
}
function sumArray(arr) {

    if (arr.length === 0) {
        return 0;
    }

    let lastElement = arr.pop();
    

    if (isInt(lastElement)) {
        return lastElement + sumArray(arr);
    } else {
        return sumArray(arr);
    }
}

let numInt = [1, 52, 5.5, 6.1, 22];
console.log(sumArray(numInt)); 
