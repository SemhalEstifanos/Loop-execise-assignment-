// 1,
function loginAttempts(){
let attempt=0;
let maxAttempts=3;

while(attempt<maxAttempts){
    console.log(`login attempt ${attempt+1} failed.`)
    attempt++;
}

if (attempt==maxAttempts){
    console.log("Account locked");
}

}
loginAttempts()

// 2

function processVotes(votes){
    let i = 0;
    do{
        console.log(`Vote record:${votes[i]}`)
        i++;
    }
    while(i<votes.length)
        console.log("All votes have been processed")

}
let votes=["Yes","No","Yes","Yes","No","Yes"]
processVotes(votes)




// 3

function printNameOfDays(dayNumber) {
    dayNumber.forEach((dayNumber) => {

        switch (dayNumber) {
            case 1:
                console.log("Monday");
                break;

            case 2:
            console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
             
            console.log("Sunday");
            break;
                default:
                    console.log("Invalid day number");
                    break;


        }
    }


    )
}

const dayNumber=[1,2,3,4,5,6,7,8]
printNameOfDays(dayNumber);



// 4

function checkPassword(passwords){
    for(i=0; i<passwords.length; i++){
        if(passwords[i].length >= 8){
            console.log("It is strong password");
    }
       else{
        console.log( "It is weak password");
       }

    }


}
const passwords=["mypassword","word","strongpassword"];
checkPassword(passwords);

//5 

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
            break;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        }

    }

    )

}
const language=["en","fr","sw","sw","am"];
showGreeting(language);

// 6
function checkTemprature(temperatures){
    for(i=0; i<temperatures.length;i++)
        {
         if(temperatures[i]>30){
            console.log("High heat alert!")
         }
         else if(temperatures[i]<15){
            console.log("Cold alert")
         }
         else{
            console.log("Noraml conditions")

         }
    }
}
let temperatures=[34,67,10,25,78,0,23]
checkTemprature(temperatures)

// 7

function registerNames(names){
    while (names.length>0){
        let nextUser=names.shift()
        console.log(`Currently registering: ${nextUser}`)
    }
console.log("Registration queue is now empty.")
}
let names= ["Semhal","Elleni","Bruk","Arsu"]
registerNames(names)


// 8

function startTestRetake(testScore){
    let attemptNumber=1
         if(testScore>=50){
            console.log("Student doesn't need to retake the exam.")
        }
else{

    do{
        console.log(` Student got score ${testScore} and is on attempt ${attemptNumber}`)
        testScore +=10
        attemptNumber++
    }
    while(testScore<50);
   
  
}
} 
  
    startTestRetake(50)
    








