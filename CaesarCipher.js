const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

let encode = "";

let str = "adcd";

for (let i = 0; i < str.length; i++){
    const index = input.indexOf(str[i]);
    encode += output[index];
}