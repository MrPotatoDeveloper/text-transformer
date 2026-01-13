const makeUp = document.querySelector('#uppercase');
const makeLow = document.querySelector('#lowercase');
const makeCap = document.querySelector('#capitalize');
const makeRev = document.querySelector('#reverse');
const makeClear = document.querySelector('#clear');
const myText = document.querySelector('#textarea');
const myResult = document.querySelector('#result');


makeUp.addEventListener("click", () => {
   if(myText.value === ""){
      myResult.innerText = "The text can not be empty!";
   }else{
   myResult.innerText = "Show Result : " + myText.value.toUpperCase();
   }
});

makeLow.addEventListener("click", () => {
   if(myText.value === ""){
      myResult.innerText = "The text can not be empty!";
   }else{
      myResult.innerText = "Show Result : " + myText.value.toLowerCase();
   }
});

makeRev.addEventListener("click",() => {
   if(myText.value === ""){
      myResult.innerText = "The text can not be empty!";
   }else{
         myResult.innerText = "Show Result : " + myText.value.split("").reverse().join("");
   }
});
makeCap.addEventListener("click", () => {
         if(myText.value === ""){
         myResult.innerText = "The text can not be empty";
   }else{
         const textSplit = myText.value[0].toUpperCase();
         const combText = textSplit.concat(myText.value.substring(1));
         myResult.innerText = "Show Result : " + combText;
   }
      
});

makeClear.addEventListener("click", () => {
   myResult.innerText = "Show Result :";
   myText.value = "";
});