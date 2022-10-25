/* Filename: script.js
   Target html: index.html
   Author: Mario Stavreski 
   Date written: 26/10/2022
   Revisions:  v1.0
*/


function confirmAction() {
    let confirmAction = confirm("Are you sure to execute this action?");
    if (confirmAction) {
      document.getElementById("text").innerHTML = "You clicked Yes";
    } else {
      document.getElementById("text").innerHTML = "You clicked Cancel";
    } 
  } 



