// Maps 
/* properties 
-- khud hi returb kardeta hai 
--har ak elemenet pe map hota hai nd gvs us the opurtunity to edit each and every element 
--
*/
const myNum = [3,4,5,6,7,8]
const kal = myNum.map((num)=>num+1)
//console.log(kal);

// chaining in maps
const newNums =myNum.map((nu)=>nu*10)
                    .map((n)=> n+1)
                    .filter((k)=>k>50) // specific returnee

console.log(newNums);