//1
let num = 1;
while(num <= 10){
console.log(num);
num ++;
}
//2
// let Nume = 2;
// while(Nume <= 20){
// if((Nume % 2) === 0){
//     console.log(Nume);
// }
// Nume ++;
// }
for(let i = 2; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
//3
for(let i = 1; i <= 10; i++){
    console.log(7 * i);
}
//4
const mus = [1,2,3,4,5];
let index = 0;
while(index < 5){
console.log(mus[index]);
index ++;
}
//5
const aray = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i < aray.length; i++){
    if(aray[i] === 7){
        break;
    }
    console.log(aray[i]);
}
//6
const n = prompt("Введіть число: ");
for(let i = 0; i < n; i++){
    console.log(i);
}
//7
let i = 1;
while(i <= 20){
    if(i % 3 !== 0){
        console.log(i);
    }
    
    i++;
}