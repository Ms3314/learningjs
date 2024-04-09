// Basic syntax of a promise
new Promise(function (resolve,reject) {
    setTimeout(() => {
        
    //console.log("baka shakalaka")
    resolve()
    }, 300);
}).then(()=>
{
    //console.log("yes it is resolved")
})


// pssing objects into the resolve pretty intresting 
const food = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        //console.log("tu ist sehr klug bitte")
        //resolve(items)
    })
})

 food.then((fd)=>{
   // console.log(` the price of dal is ${fd.dal} rupees`)
 })


 // using then and catch and finally by passing args in resolve and reject 
 const functy = new Promise ((resolve , reject)=>{
    const  items = {
        chana : "500",
        dal : "453",
        mutter : "333"
    }
    const error = true 
    setTimeout(() => {
        if (!error)
        {
            resolve(items)
        }
        else {
            reject("Error please review")
        }  
    }, 1000);
   
 })
 functy.
 then((item)=>{
    return item.chana
 }).
 then((cha)=>{
    //console.log(cha)
 }).
 catch((solo)=>{
    //console.log(solo)
 })
//  finally(()=>{}//console.log('the promise is either resolved or rejected')) // ye toh hota hi hota hai 

 // trying the asyn await methood 
 const colon = new Promise(function (resolve, reject) {
    const error = false;
    setTimeout(() => {
        if (!error) {
            resolve({ name: 'js', class: 'cse-2' });
        } else {
            reject("No problem");
        }
    }, 1000);
});

async function good() {
    try {
        const tala = await colon
        console.log(`I study ${tala.name} and I am in class ${tala.class}`)
    } catch (error) {
        console.log("Error please review");
    } finally {
        console.log("Task completed either resolved or rejected ")
    }
}

//good();

// now we try a little bit of fetch 
const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
async function solo () {
    try {
       
        const data = await fetch(requestUrl)
        console.log(data)
    } catch (error) {
        console.log("error occoured")
    }
}
//solo()

fetch(requestUrl).
then((Response)=>{
    return Response.json()
}).
then((data)=>{
    console.log(data.name );
}).
catch((error)=>{
    console.log("Haleeloya an error boy")
})