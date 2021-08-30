// 논리형 true or false
// 비교연산/논리연산
// 논리 조합 : AND(논리곱: &&), or(논리합: ||), Not(논리 부정:!)

let v1; // 선언하되 초기화 되지 않음
let v2 =null;  //선언하고 null로  초기화
console.log(typeof v1, typeof v2);
// undefined: 자바스크립트 엔진에  허용된 데이터
// null: 개발자에게 허용된 타입
// null 체크
console.log(v1, typeof v1, v1 == null);
console.log(v2, typeof v2, v2 == null);
// 개발자가 임의로 undefined 를 할당할 수 있따.
v2= undefined;
console.log(v2, typeof v2, v2== undefined); //undefined 체크

// == : 타입과 관계 없이 값을 비교 
// ===: 값과 함꼐 타입도 비교
console.log(2021 == "2021"); //값만 비교
console.log(2021 === "2021"); //값과 타입비교

// javascript 는 number, string 이  비어있트면 false
// 데이터가 있으면 true 반환
console.log("문자열:", Boolean("String"), Boolean(""));
console.log("수치형", Boolean(2021), Boolean(0));

let content = "Contents";

console.log(true && content); // -> CONTENTs 선택
console.log(false && content); // -> false

console.log(true || content); // -> true
console.log(false || content); // -> contents 선택



