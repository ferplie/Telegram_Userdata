//This is not the entire App.js! Just the part I wanted to save
import './App.css';

const tele=window.Telegram.WebApp;
let myUser_ID = tele?.initDataUnsafe?.user?.id ?? <someTelegramID>;//I used my own ID here to test
let myUser_Name=tele?.initDataUnsafe?.user?.first_name ?? "Unknown";
let mySurname=tele?.initDataUnsafe?.user?.last_name ?? "User";

//
Code:

getBot();
//getBot calls the serverless function "bot". bot takes the Telegram ID, Username and Surname and sends back the Telegram 
//USER's First Name, Surname and Telegram ID to the calling
//function. It is just a tester function I created to see how the Telegram "window.Telegram.WebApp" works
//The function:
  async function getBot(ev) {
    console.log('Invoking bot');
    const url=`/api/bot?id=${myUser_ID}&surname=${mySurname}&name=${myUser_Name}`;//Calls the "bot" serverless function and passes the user id, name and surname
    //parameters
    const myData =await fetch(url);
    const received = await myData.json();
    console.log("The Telegram Data is: name: "+ received.name+" surname:  "+received.surname+" id: "+received.id);
}
