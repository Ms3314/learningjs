let arr = [2,3,4,5,7]
const string = "black_sheep"
// looping over an array 
for (const forstring of string) {
    //console.log(forstring);
}

// maps in arrays are iterable using for of nicee

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States")
// console.log(map);

for (const [key , value] of map) {
    console.log(key + ":-" + value);
}

// this object is not itterble through for of 
let myobj = {
    game1 : 'NFS',
    game2 : 'SPD'
}
for (const [key , value] of myobj) {
    // console.log(key + ":-" + value);
}