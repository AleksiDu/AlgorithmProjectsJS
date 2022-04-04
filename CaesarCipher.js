function rot13(str) {
    let encode = "";
    const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?. ";
    const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm!?. ";
  
    for (let i = 0; i < str.length; i++){
      const index = input.indexOf(str[i]);
      encode += output[index];
  }
  return encode;
  }
  
  console.log(rot13("SERR PBQR PNZC"));