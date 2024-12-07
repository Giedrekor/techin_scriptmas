//  Phone Number Formatter
function formatPhoneNumber(phone) {
  let newPhone =
    "(" +
    phone.substr(0, 3) +
    ")" +
    " " +
    phone.substr(3, 3) +
    "-" +
    phone.substr(6, 4);
  return newPhone;
}

let output = formatPhoneNumber("8005551212");
console.log(output); // –> “(800) 555-1212”
// console.log(typeof(output));
