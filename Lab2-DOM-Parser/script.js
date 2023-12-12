// var mp = {
//   101: "FSD",
//   102: "SpringBoot",
//   103: "Core Java",
//   104: "Python",
// };
// var arr = [1, 2, 3, 4];
// var s = 0;
// for (key of arr) {
//   s += parseInt(`${key}`);
// }
// console.log(s);

// for (key in mp) {
//   if (mp.hasOwnProperty(key)) {
//     console.log(`${key}: ${mp[key]}`);
//   }
// }

// while (true) {
//   const marks = parseFloat(prompt());
//   if (marks > 0 && marks < 30) console.log("Fail");
//   else if (marks >= 30 && marks < 50) console.log("Pass");
//   else if (marks >= 50 && marks < 80) console.log("First Class");
//   else if (marks >= 80 && marks<=100) console.log("First Class with Distinction");
//   else console.log("Enter valid marks");
// }

function handleAlert(id) {
  var Google = document.getElementById(`${id}`);
  
  Google.addEventListener("click", ()=> {
    alert(`${id} clicked`);
  });
}
handleAlert("google")
handleAlert("amazon")
handleAlert("oracle")