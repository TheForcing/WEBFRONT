 function logicA(){
    console.log("begin logic");

    setTimeout(()=>{
        console.log("callbackA called");
        console.log("begin logic B");
        setTimeout(()=>{
                  console.log("callback called");
        },2000);
        console.log("end logic B");
    }, 2000); // 2초 후에 콜백 함수 적용
    console.log("end logicA");  
}
// logicA();

function logicPromise(){
    console.log("begin logicPromise");

    //비동기 처리를 위한 Promise 객체 생성
    return new Promise((resolve, reject)=>{
       // reslove: 성공했을 떄 값을 전달 
       // reject: 실패 했을댸 값을 전달
       setTimeout(()=>{
        //    resolve("Success");
           //비동기 처리에 성공하면 resolve 함수를 실행한다.
            reject("rejected!");
        },2000);
        console.log("end logicPromise"); 
    });
}

function testLogicPromise() {
    console.log("Test logic Promise");
    logicPromise()
          .then(value=>{
              // 성공했을 떄
              console.log("Promise success", value);
          })
          .catch(reason=>{
              //실패했을떄
              console.error("Promised Failed", reason);
          })
}
// testLogicPromise();


// async/await 는 Promise를 좀 더 쉽게 다룰수 있도록 해준다.
async function asyncFunc(){
    console.log("async function");
    return "Success";

}

//async 함수는 항상 Promise를 리턴함
asyncFunc()
.then(value=>{
    console.log(value);
});
