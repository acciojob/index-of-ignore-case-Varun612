function indexOfIgnoreCase(s1, s2) {
  return s1.toLowerCase().indexOf(s2.toLowerCase()) // write your code here
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
