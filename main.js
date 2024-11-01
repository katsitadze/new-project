 const arr=[
    {
        name: "temo",
        age: 25,
    },
    {
       name:"lasha",
       age: 29,
    },
    {
        name: "ana",
        age: 29,
    },
 ]


    
 let smallAge= function(minii){
    let mini= Math.min(...minii.age);
    console.log(mini)

 }

smallAge(arr);