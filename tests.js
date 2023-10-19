const bruh = (a, b) => { return a - b};
function helloprivet(omega, sigma, bomb) {
      console.log((omega - sigma + 44)*2);
}
helloprivet(4, 6, 8)


const eurCurr = 32;
const usdCurr = 28;
function convert(amount, curr) {
      console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);


function getMathResult(b, n) {
      if (typeof (n) !== "number" || n <= 0 ) {
            return b;}
      let end = "";

      for (let i = 1; i <= n; i++) {
            if (i === n) {
                  end += `${b * i}`;
                  console.log(end);
            } else {
                  end += `${b * i}---`;
                  console.log(end);
}
}
return end;
}
getMathResult(5, 3);


function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
          return num;}
    let str = '';

    for (let i = 1; i <= times; i++) {
          if (i === times) {
                str += `${num * i}`;
                console.log(str);
            // Тут без черточек в конце
          } else {
                str += `${num * i}---`;
                console.log(str);
            // Это тоже самое, что и
            // str = str + num * i + "---"
}
}

return str;
}

getMathResult(10, 5);






const bebra = "Amogus na palke";
const kurva = "894756";
console.log(bebra.indexOf("q"));
console.log(kurva.indexOf("7"));



const varden = "kak u tebya dela dorogoy drujok";
console.log(varden.slice(12, 20));