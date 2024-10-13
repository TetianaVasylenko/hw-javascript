function isPasswordStrong(password) {
    const minLength = 8;
    const hasNumber = /[0-9]/;
    const hasLowerCase = /[a-z]/;
    const hasUpperCase = /[A-Z]/;


     if (password.length < minLength) {
    return "Weak"
     }

     if (!hasNumber.test(password)) {
    return "Weak"
     }

     if (!hasLowerCase.test(password)) {
         return "Weak"
     }
     if (!hasUpperCase.test(password)) {
         return "Weak"
     }
    
return "Strong"

}

const password = "Qwertyui1";

console.log(isPasswordStrong(password));
