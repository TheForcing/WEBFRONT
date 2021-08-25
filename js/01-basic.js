//한줄 주석
/* 
여러줄 주석
: JavaScripte ㅈ숵은 c,Java와 동일
*/
// 내장 객체 console
console.info("정보 메시지");
console.debug("디버그 메세지");
console.warn("경고 메세지");
console.error("에러 메세지");

console.log("Hello, Javascrpit");

//연속으로 데이터를 출력 ->,로 구분
console.log("String",2021,true);

//현재 플랫폼 정보 출력
console.log("Process Version:",process.version);
console.log("Process Platform". process.platform);

// 객체의 속성 접근
console.log(Math.PI);// MAth객체의 속석인 PI값
console.log(Math.max(1,3,2,4,9,5))

// var, let, const
var testVar = 10; //전통적인 할당방법; 가급적 사용을 지양
let testLet = "let"; //let:변경가능
const Test_const = "const"; //const: 변경불가
//상수처럼활용, 선언과 동시에 할당해야 한다.


//값의 변경
testVar="changed";
testLet="changed";
//Test_const="changed"; // error:변경할 수 없다.

console.log("testVar:", testVar);
console.log("testLet:",testLet);
console.log("Test_const:",Test_const);

console.log("---------------");
//Javascript 동적 타입 언어
// 데이터 타입이 고정되지 않고 
// 데이터가 할당되었을때, 그타입이 결정
let v= "This is String";
// 데이터의 타입을 체크해야 한다
console.log(v,"=>",typeof(v));

// 다른 데이터 타입 할당
v = 2021;
console.log(v,"=>",typeof(v));

