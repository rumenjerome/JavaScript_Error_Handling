
"use strict";

function parseToJSON(data) {
  try {
  return JSON.parse(data); 
  }
catch (error) {
  console.error(error.message)
return null
}
}

let failData = "<h1>Hello World!</h1>"

let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData));

console.log(parseToJSON(passData));
