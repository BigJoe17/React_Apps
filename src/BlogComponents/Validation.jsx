import React from 'react'

function Validation(values) {
let error = {}
const email_pattern = /^[^\s@0]+@[^\s@]+\.[^\s@]+$/
const password_pattern =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


if (values.email === ""){
    error.email = "Name should not be Empty"
}
if(!email_pattern.test(values.email)){
    error.email = "Email did not match"
}
if(values.password===""){
    error.password = "Password should not be empty"
}
if(!password_pattern.test(values.password)){
    error.email = "Enter a valid password not less than 8 characters"
}

if (values.confirm_password === "" || values.confirm_password !== values.password){
    error.confirm_password = "password does not match"
}
  return  error;
   
  
}

export default Validation