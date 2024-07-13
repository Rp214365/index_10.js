const user = {
    Username : "RICKY",
    price : 999,

    welcomeMessage: function (){
        console.log(`${this.Username} , Welcome to this website`);
        // console.log(this);
    }
    
}


// user.welcomeMessage();
// user.Username = "sam";
// user.welcomeMessage()


// console.log(this);

// function one() {

//     let name = "Ricky"
//     console.log(this.name);
// }

// one()

const two =  () => {
    let name = "Ricky";
    console.log(this.name);
}

two()


// const addtwo = (num1,num2) => {
//     return num1 + num2
// }

// const addtwo = (num1,num2) => num1 + num2
// const addtwo = (num1,num2) => (num1 + num2)
const addtwo = (num1,num2) => ({username: "rp"})

console.log(addtwo(3,4));

