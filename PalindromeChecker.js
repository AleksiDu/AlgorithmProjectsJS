function palindrome(str) {


    //String simplify, With .replace(/[^a-zA-Z]+/g, '') only letters will remain.
    let regexStr = str.replace(/[^a-zA-Z]+/g, '').toLowerCase();

    //Palindrome algorithm
    for (let i = 0; i < (regexStr.length / 2); i++){
        console.log(regexStr[regexStr.length - 1 - i]);
        if (regexStr[i] === regexStr[regexStr.length - 1 - i]){
            return true;
        }
    }

    return false;
  }
   
  console.log(palindrome("eye"));