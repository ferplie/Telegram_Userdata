//This function does nothing, except it takes the parameters passed from App.js and returns it to App.js
exports.handler = async (event,context) => {

 try {
console.log("LOG: ID "+event.queryStringParameters.id);
console.log("LOG: Name "+event.queryStringParameters.name);
console.log("LOG: Surname "+event.queryStringParameters.surname);

   return { statusCode: 200, body: JSON.stringify({name:event.queryStringParameters.name,surname:event.queryStringParameters.surname,id:event.queryStringParameters.id} )}
 } catch (e) {
   console.error("error in handler:", e)
   return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
 }
}
