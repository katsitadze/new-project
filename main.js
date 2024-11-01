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

//დავალება 1
    
 function getyoungest(users){

let youngest=users[0]
for (let a of users){
    if(a.age < youngest.age ){
        youngest=a;
    }

}
return youngest.name;
 }
 console.log(getyoungest(arr));

 //დავალება 2
  function changeArr(obj){
    return{
      name:  obj.name.toUpperCase(),
      age:   obj.age * 2,
    }
}
 const changeArrys=arr.map(changeArr)
 console.log(changeArrys)
 // დავალება 2/2 amokhsna

arr.forEach( obj => {
    obj.name=obj.name.toUpperCase(),
    obj.age=obj.age*2
   
})
console.log(arr)


//დავალება 2


function diePlay() {
    return Math.floor(Math.random() * 6) + 1;
}

function winrolled(player) {
    let attempts = 0;
    let roll;

    do {
        roll = diePlay();
        attempts++;
        console.log(`${player} rolled: ${roll}`);
    } while (roll !== 3);

    return attempts;
}
function letplay() {
     const attemptsA = winrolled("pleyer1");
    const attemptsB = winrolled("player2 ");

    if (attemptsA < attemptsB) {
        console.log(`User A wins after ${attemptsA} attempts!`);
    }  else {
         console.log(`User B wins after ${attemptsB} attempts!`);
    }
}

letplay();

