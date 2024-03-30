const lang = ["cpp","js","python","ruby"]
lang.forEach((item)=>{
    //console.log(item);
})

function printME(item){
    console.log(item);
}

// lang.forEach(printME)
// how for each exactly takes and all 
lang.forEach((item , index , arr)=>{
    // console.log(item , index , arr);
})

const myCooding = [
    {
        langname : "Javrkascript",
        langfile : "jrs"
        
    },
    {
        langname : "Javkascript",
        langfile : "jk"

    },

    {
        langname : "Jakvakscript",
        langfile : "jhs"

    },
]

myCooding.forEach((item)=>{
    console.log(item.langname);
})