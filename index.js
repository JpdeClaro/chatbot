function runBot(){
    // Input your Name
    let yourName = (prompt("You just clicked me ^-^, Im JOYBOY your assistant bot." + "\n What is your name?"));
        alert("Hi "+ yourName + "\n :)");
    // choose anything here!
    let choice=Number(prompt("How can I help you? \n 1. What master do you serve?, 2. Who created you?, 3. Tell me a Joke , 4. Nothing"));
        if (choice == 1 ) {
            alert("I serve you Master " + yourName);

        }else if (choice == 2){
            alert(" I created by sir Jp DeClaro ");

        }else if (choice == 3){
            let choice = Number(prompt("Why don't oysters donate to charity? \n 1. Why?"));
                if (choice == 1 ){
                    alert("Because they are shellfish! HAHAHAH");
                }
        
        }else if (choice == 4){
            let choiceNothing = Number (prompt("Okay, anything else? " + "\n 1. None" ));{
                if (choiceNothing == 1 ){
                    alert("K, Bye! \n -_-");
                }
            }
        
        }else{
            alert("K... -_-");
        }

}