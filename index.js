function logVote(arrayOfVotes) {
    // let arrayOfVotes=1;

    do {
        console.log(`this is your ${arrayOfVotes}`)
        arrayOfVotes += 1;

    }
    while (arrayOfVotes <= arrayOfVotes.length)
}
logVote(["yes", "yes", "no"])


// 3,loops through an array of numbers from 1-7 ans use a swith  to print the corrosponding day name.

// function nameOfDays(numbers) {
//     arrayOfDays.forEach((day) => {

//         switch (day) {
//             case 1:
//                 console.log("Monday");
//                 break;

//             case 2:
//             console.log("Tuesday");
//                 break;
//             case 3:
//                 console.log("Wednesday");
//                 break;
//             case 4:
//                 console.log("Thursday");
//                 break;
//             case 5:
//                 console.log("Friday");
//                 break;
//             case 6:
//                 console.log("Saturday");
//                 break;
//             case 7:
             
//             console.log("Sunday");
//             break;
//                 default:
//                     console.log("Number outof range");
//                     break;


//         }
//     }


//     )
// }

// const numbers=[1,2,3,4,5,6,7,8]
// nameOfDaysdays(numbers)

// 4,given an array of string use if else to log "strong" if length >=8 and "weak" otherwise


function idenifyString(arrayOfString){
    for(i=0; i<arrayOfString.length; i++){
        if(arrayOfString[i].length >= 8){
            console.log("It is strong password");
    }
       else{
        console.log( "It is weak password");
       }

    }


}
const arrayOfString=["mypassword","word","strongpassword"];
idenifyString(arrayOfString);
//5 you are building a mulitiligual site.use a switch to show greetings based on languge codes.i.e "en"->"hello","fr"->"Bonjur","sw"->"sabhari"

function showGreeting(languages){
    languages.forEach((Greeting)=>{
        switch(Greeting){
            case "en":
            console.log("Hello");
            break;
            case "fr":
            console.log("Bonjur");
            break;
            case "sw":
            console.log("Sabhari");   
            break;
            default:
            console.log("languge not found")

        }

    }

    )

}
const language=["en","fr","sw","sw","am"];
showGreeting(language);

//7, You're building a weather dashboard. Loop through an array of temperatures and: If above 30, log "High heat alert!", else if below, log "Cold alert!", else, log "Normal conditions"

function tempratures(temperatureRecord){
    for(i=0; i<temperatureRecord.length;i++)
        {
         if(temperatureRecord[i]>30){
            console.log("High heat alert!")
         }
         else if(temperatureRecord[i]<15){
            console.log("Cold alert")
         }
         else{
            console.log("Noraml conditions")

         }
    }
}
let temperatureRecord=[34,67,10,25,78,0,23]
tempratures(temperatureRecord)


// 9,Users are queued to register. Use a while loop to remove and print each name until the queue is empty.

function registerNames(names){
    while (names.length>0){
        let nextPerson=names.shift()
        console.log(`Currently registering: ${nextPerson}`)
    }
console.log("Registration queue is now empty.")
}
let names= ["Semhal","Elleni","Bruk","Arsu"]
registerNames(names)

function logVote(arrayOfVotes) {
    // let arrayOfVotes=1;

    do {
        console.log(`this is your ${arrayOfVotes}`)
        arrayOfVotes += 1;

    }
    while (arrayOfVotes <= arrayOfVotes.length)
}
logVote(["yes", "yes", "no"])

// Students retake a test until they score 50 or more. Use do...while to simulate attempts, increasing the score by 10 each time until it's >= 50.

function startTestRetake(){


    do{
        console.log(`Attempt ${attemptNumber},score ${testScore} `)
        testScore +=10
        attemptNumber++
    }
    while(testScore<=50);
    
    
    
    }
    let testScore= 30
    let attemptNumber=1
    startTestRetake()
    








