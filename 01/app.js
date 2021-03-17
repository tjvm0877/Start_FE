console.log('app.js');
// 한줄 주석
/*
여러줄 주석
 */

// 변수의 이름은 대소문자가 다르기 때문에 2개의 변수는 다른 변수이다.
// 예약어는 사용 불가능하다. var var = 'test'는 불가능  
var name = '김재현';
var Name = '김재현';
var count = 1;

console.log(name); // 김재현
console.log(Name); // 김재현
console.log(count); // 1


// JS에서는 String도 자동으로 bool형으로 변환되어 작동이 된다.
// Bool형
// var isMan = true;

// String형
var isMan = 'true';

// ,를 찍으면 다른값은 연이어서 log를 확인 가능하다.
console.log(isMan, true); 


//로그를 그대로 찍어주는 함수
function log(str) {
    console.log(str);
}
//함수도 데이터 타입이기 때문에 다음과 같은 형태가 가능하다.
/*
var log = function(str) {
    console.log(str);
}
*/

// log 함수 사용 예
log('Hello?'); // Hello?


//객체 선언 
var image = {
    width: 100,
    height: 100,
    imgname: '1.png' 
};
// var imagewidth = 100;
// var imageHight = 100;
// var imageName = '1.png';

console.log(image); // {width:100, height:100, name: "1.png"}


//배열 선언
var image1 =  [1,2,3,4,5,6,7, "a", "b"];
console.log(image1); // (9) [1,2,3,4,5,6,7, "a", "b"] 
// 다음과 같이 배열 안의 데이터를 바꿔줄 수 있다. 
// image1[0] = 'a';

// 값이 없다.
var data = null;

// 빈값을 가지고 있다.
var date1 = ' ';

// undefined
var date2;

// null "" undefined
//console.log(data, data1, date2); // Uncaught ReferenceError: data1 is not defined 라고 에러.... 



//주요연산자 사용
console.log(1+2); // 3
console.log('a'+'b'); // ab

// 다른 데이터 타입을 붙이는 것은 지양해야한다.
console.log(1 + '4') // 14

// 비교연산자
/*
비권장 (버그를 일으킬 소지를 가지고 있다.)
== 동등
!= 부등

권장
=== 일치
!== 불일치
*/
console.log(1 == 1); //true
console.log(1 == 2); //false
console.log(0 == ' '); // true

// 간단한 if문
if (false) {
    console.log(1);
} // 찍히지 않는다.

/*
 논리곱 : &&
 논리합 : ||
 논리부정 : !
 */
// if (isHero && ishulk) {
//     //논리곱, 둘다 참일경우 실행
// }

// in : 해당 객체에 원하는 속성이 있을 경우 true
/* 
var image = { width: 1, height:2 };
colsole.log('width' in image); //true
 */

delete imageWidth; // 객체의 프로퍼티 자체를 삭제, var로 선언한 변수는 delete하지 못한다.
image.width = null; // value만 지우고 프로퍼티는 남긴다.

// typeof, 현재 타입이 어떤 데이터 타입인지 확인하기 위해 사용한다.
console.log(typeof (1 + '4')); // string
// typeof foo !== 'undefined';

// instanceof, 인스턴스인지 아닌지 확인하기 위해 사용