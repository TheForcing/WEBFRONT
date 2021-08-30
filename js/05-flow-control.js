//연습문제 1
//2단부터 9단까지
// (for 문, while 문)
for (let i=2; i<10; i++){
    for(let j=1; j<10; j++){
        console.log(i+"*"+j+"="+i*j);
    }
}
   let dan=2;
while(dan<=9){
    let j=1;
    console.log(dan+"단");
    while(j<=9){
        console.log(`${dan}*${j}=${dan*j}`);
        j++;
    }
    console.log();
    dan++;
}

for(let count=5; count>=1; count--){
    let stars ="";
    for(let str=1; str<=count; str++){
          stars +="+";
    }
    console.log(stars);
}

let count= 5; 
while(count>0){
    let stars="";
    let col= 1;
    while(col <= count){
     stars += "*";
     col++;
}
console.log(stars);
count--;
}


//연습문제2
// ******
// *****
// ****
// ***
// **
// *

//ES6: for .... in
// 객체의 속성을 순회
// ES6 : for .... of
// 순회 객체의 값을 순회

let obj  ={
    name="홍길동",
    age : 28,
    job: "도적",
    gender : "남성"
}

for( let key in obh){
    //for ,l,, in : 객체의 속성들 ㅅ훈회
    console.log(key, "->", ojb[key]);

}
const arr= [5,1,4,3,2,9,0,8];
for(let key in arr) {
    console.log(key);
}

console.log("====for ... of");
for(let value of arr){
    //for .... of: 반복 가능 객체에서 요소를 하나싞
   console.log(value);
}

for(let value of obj) {
    console.log(value);
}