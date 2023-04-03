setTimeout(() => {
    console.log("Привет, мир!");
  }, 5000);  // задержка кода
  

let arr =["hello world",14,false] // массив с 3 элементами

let hello=()=>{
console.log(arr[0],arr.length);}
hello()



  let mult=(a,b)=>a*b  // умножить и задержка кода
setTimeout(()=>{
    console.log(5,10);
},1000)


  const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];
  
const sumPositiveNegative = (arr) => {
    let positiveSum = 0;
    let negativeSum = 0;
  
    for (let i = 0; i < arr.length; i++) {    // тут начало,условие,если тру выполняется тело
      if (arr[i] >= 0) {  
        positiveSum += arr[i]; // если больше то плюсует и приравнивает
      } else {
        negativeSum += arr[i]; // если меньше то плюсует и приравнивает
      }
    }
  
    return { positive: positiveSum, negative: negativeSum }; // выдает результат
  };
  
  const result = sumPositiveNegative(nums);
  
  console.log(result); // Выводит { positive: 74, negative: -54 }


  let a = 'first';
let b = 'second';

console.log(a, b); // first second

[a, b] = [b, a];

console.log(a, b); // second first

