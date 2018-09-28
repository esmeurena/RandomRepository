var customer_name;
var balance;
var message;
const openbutton= document.querySelector('#open');
const statementdiv= document.querySelector('#statement');
openbutton.addEventListener('click', function(){
//get value from user input
const username= document.getElementById('username');
message= openAccount(username.value);
statementdiv.innerHTML= '<p>' +message+ '</p>';
});

function openAccount(name, value=0){
  balance = value;
  customer_name= name;
  // Set the value for customer_name equal to name below

  return name + 'has opened an account with balance $' + balance;
}

function deposit(value){
  balance+=value;
  // update the value of balance
  //return the correct statement
  return customer_name+ 'has deposited $' +value+ 'and now has $' +balance;
}

function widthraw(value){
  balance= balance - value;
  //update the value of balance
  //return the correct statement
return balance;
}

// Write your script below
