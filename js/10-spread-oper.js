console.log("============배열 전개 연산");

var arr1 = [`홍길동`, `장길산`];
var arr2 = [`임꺽정`, `전우치`];
console.log(arr1, arr2);

//기존 방식 합치기
var combined = []; //빈 배열
combined = [arr1[0], arr1[1], arr2[0], arr2[1]];
console.log("combined1:", combined);
// 두 번째 방법: concat
combined= arr1.concat(arr2);
console.log("combined2:", combined);

//세 번째 방법 : concat
combined= [].concat(arr1, arr2);
console.log("combined3:", combined);

//Es6 Way
combined = [...arr1, ...arr2];
console.log(" Esc6 combined:", combined);

//배열의 전개
console.log("=======배열의 전개");
console.log("원본배열:", arr1);
var [first, second, third="empty",...others]= arr1;
console.log(first, second, third, others);
// 홍길동 장길산 empty []

console.log("원본배열:", combined);
var [first, second, third="empty", ...others]= combined;
console.log(first, second, third,others);

console.log("=====객체 전개 연산");
var obj1= {one:1, two:2, other:0};
var obj2= {three:3, four:4, other:-1};

//기본 방식
var combined= {
    one: obj1.one,
    two: obj1.two,
    three:obj2.three,
    four:obj2.four,
    other:obj2.other
}
console.log("obj1:",obj1);
console.log("obj2:",obj2);
console.log("combined1:",combined);

//방법2: object 객체 이용
combined = Object.assign({}, obj1, obj2);
console.log("combined2:", combined);

//연결 순서 바꾸기
combined= Object.assign({}, obj2, obj1);
console.log("combined3:", combined);
//Esc6 way
combined={
    ...obj1,       // obj1의 모든속성을 전개
    ...obj2         // obj2의 모든 속성을 전개

}

//TODO: 전개 순서를 obj2, obj1 순서로 전개해서 결과를 비교
console.log("Es6 combine:", combined);

combined={
    ...obj2,       // obj1의 모든속성을 전개
    ...obj1         // obj2의 모든 속성을 전개

}

console.log("Es6 combine:", combined);
// 객체의 전개
console.log("원본:", combined);
var {one,three, ...others} = combined;
console.log(one, three, others);
// 13 { four:4,other:0, two:2}
