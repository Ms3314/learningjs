const myObj2 = {
    js : "javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
}
// now how can u iterate over loops 
// we use forin loops instead for forof 

for (const key in myObj2) {
    //console.log(`${myObj2[key]} has the key ${key}`);   
}

//? now cani use forin loop for arrays

const arrt = ["kali" , "jira" , 'kali']
for (const key in arrt) {
    //console.log(`${key} is the index for the ${arrt[key]}`);

} // so we infer than we use for in as well as for of loop for the arrays 
// one disadvantage is that it gives keys not the literal answer that we used to get in the for of 

//?  can we map using for in ()
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States")

for (const ans in map) {
    console.log(ans);
    // NOTE : maps are iteratable using forof and not using for in 
}// maps pe iterate nai kiya ja sakta 