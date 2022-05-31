alert("salam")

//task1

// class CustomMatch{
//   constructor(number){
//    this.number=number
//   }

//    plus(num) {
//       this.number+=num;
//       return this;
//     }

//     minus(num) {
//         this.number-=num;
//         return this;
//     }

//     divide(num) {
//         this.number/=num;
//         return this;
//     }

//     multiply(num) {
//         this.number*=num;
//         return this;
//     }
  
    
// }

// var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)

//  console.log(result);



//task2

class Array {
    constructor(arr){
  this.arr=arr
  
    }
    finds(value){
  for (let index = 0; index < this.arr.length; index++) {
      const element = this.arr[index];
      
      if (value==element) {
      return value;
      }
    
     
  } 
  
    }
    push1(value){
  
      this.arr[this.arr.length++]=value;
       return this.arr
  }
  
  
  }
  
  
  let arr1=[1,2]
  let newarr=new Array(arr1).push1(8)
  let newarrs=new Array(arr1).finds(2)
  console.log(newarrs);
  console.log(newarr);



