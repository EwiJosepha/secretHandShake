// let submit = document.getElementById("submit");
// let displayer = document.getElementById("showme");

// let ans = "";
// let rem;

// //converting to binary

// function convertdeci() {
//   let number = document.getElementById("number").value;
//   while (number != 0) {
//     rem = number % 2;
//     number = parseInt(number / 2);
//     ans += rem;
//   }
//   return ans.split("").reverse().join("");
// }


// const messagesToDisplay = [
//   { message: "wink" },

//   { message: "Double Blink"},

//   { message: "Close Your Eyes"},

//   { message: "Jump"},
// ];

// const eachMessage = [];


// // //reversing convertdeci.

// function reversingConvert() {
//   // convertdeci()

//   let splitt = ans;
//   let splitting = splitt.split(",");
//   let splitted = splitting.reverse();
//   // console.log(splitted)

//   for (i = 0; i < splitted.length; i++) {
//     if (i < messagesToDisplay.length && splitted[i] === '1') {
//       eachMessage.push(messagesToDisplay[i].message);
//       // console.log(eachMessage)
//      }
// }

// displayer.innerHTML = eachMessage.join(",");

// }  


// function resett() {
//   ans = "";
// }

// submit.addEventListener("click", () => {
//   convertdeci();
//   reversingConvert();
//   resett();

//   // displayertwo()
// });
