function convertToRoman(num) {
    let slpitNum = num.toString().split('');
    var romNum = [];

    if (slpitNum.length > 3) {
        for (let i = 0; i < slpitNum[slpitNum.length - 4]; i++){
            romNum.push('M');
        }
    }

    switch (slpitNum[slpitNum.length -3]) {
        case "1": 
        romNum.push("C");
        break;
        case "2": 
        romNum.push("CC");
        break;
        case "3": 
        romNum.push("CCC");
        break;
        case "4": 
        romNum.push("CD");
        break;
        case "5": 
        romNum.push("D");
        break;
        case "6": 
        romNum.push("DC");
        break;
        case "7": 
        romNum.push("DCC");
        break;
        case "8": 
        romNum.push("DCCC");
        break;
        case "9": 
        romNum.push("CM");
        break;
                
      
    }
    
      switch (slpitNum[slpitNum.length -2]) {
        case "1": 
        romNum.push("X");
        break;
        case "2": 
        romNum.push("XX");
        break;
        case "3": 
        romNum.push("XXX");
        break;
        case "4": 
        romNum.push("XL");
        break;
        case "5": 
        romNum.push("L");
        break;
        case "6": 
        romNum.push("LX");
        break;
        case "7": 
        romNum.push("LXX");
        break;
        case "8": 
        romNum.push("LXXX");
        break;
        case "9": 
        romNum.push("XC");
        break;
                
      
    }
 switch (slpitNum[slpitNum.length -1]) {
   case "1": 
   romNum.push("I");
   break;
   case "2": 
   romNum.push("II");
   break;
   case "3": 
   romNum.push("III");
   break;
   case "4": 
   romNum.push("IV");
   break;
   case "5": 
   romNum.push("V");
   break;
   case "6": 
   romNum.push("VI");
   break;
   case "7": 
   romNum.push("VII");
   break;
   case "8": 
   romNum.push("VIII");
   break;
   case "9": 
   romNum.push("IX");
   break;
   case "10": 
   romNum.push("X");
 }
 return romNum.join("");
}


console.log(convertToRoman(2014));