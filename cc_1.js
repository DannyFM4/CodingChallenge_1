//Task 1: Variables
let employeeName = "John Doe"; //assigning variable employeeName to a string value
const employeeID = 101; //assigning a constant variable a number value of 101
var isActive = true; //assigning variable isActive a boolean value of true

//logging each variable's value and type
console.log("Name: ", employeeName, "Type: ", typeof employeeName); //logging variable employeeName's value and type in the console
console.log("Number: ", employeeID, "Type: ", typeof employeeID); //logging variable employeeID's value and type in the console
console.log("Value: ", isActive, "Type: ", typeof isActive); //logging variable isActive value and type in the console

//Task 2: Primitive Data Types
let productName = "T-Shirt"; //assigning the variable productName a string value of "T-shirt"
const productPrice = 20; //assigning the constant variable productPrice a number value of 20
var isAvailable = true; //assigning the variable isAvailable a boolean value of true

//logging each variable's value and type
console.log("Item: ", productName, "Type: ", typeof productName); //logging variable productName's value and type in the console
console.log("Cost: ", productPrice, "Type: ", typeof productPrice); //logging variable productPrice's value and type in the console
console.log("In Stock: ", isAvailable, "Type: ", typeof isAvailable); //logging variable isAvailable's value and type in the console

//Task 3 : Number Data Type
let accountBalance = 1000; //assigning variable number data type

console.log("New Balance after deposit:", accountBalance += 500);//Adding money into the account balance and logging it to the console
console.log("New Balance after payment:", accountBalance -= 250);//Buying product using the account balance and logging it to the console
console.log("New Balance after gaining interest:", accountBalance *= 1.05);//gained interest on account balance at the end of month and logging it to the console
console.log("New Balance in each account:", accountBalance /= 3);//diving the company balance into 3 seperate accounts and logging it to the console

//Task 4: String Data Type
let customerName = "Elijah Martin"; //assigning customerName variable a string with the customer's name
let welcomeMessage = "Welcome to our store"; //assigning welcomeMessage variable a string with a welcome

console.log(welcomeMessage.concat(" ", customerName)); //putting strings together using concatenate