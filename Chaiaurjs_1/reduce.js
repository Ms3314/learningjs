// Reduce
/* Properties 
--it has two args acc , current val

*/

const arr = [2,3,4,5,6]
/*const newq = arr.reduce((acc,curv)=>
 { 
    console.log(`acc : ${acc} current val : ${curv}`);
    console.log('adding ');
    return acc+curv

 },0)*/ // basic syntax
// the initial value over here is the 0 that gets stores in the acc
//console.log(newq)

const shopping = [
    {
        course : "js course",
        price : 2333
    },
    {
        course : "py course",
        price : 2333
    },
    {
        course : "ruby course",
        price : 2333
    },
    {
        course : "jquery course",
        price : 2333
    },
    {
        course :"cpp course",
        price : 2333
    },
    {
        course : "pearl course",
        price : 2333
    }
]

const total = shopping.reduce((acc,currval)=>{
    return acc + currval.price
},0) 
console.log(total);