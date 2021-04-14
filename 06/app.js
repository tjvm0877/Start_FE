// 기존의 변수 선언
var a = 'aa';

// 상수 선언
const b = 'bb';

//템플릿 표현식
var cp = 'ssully';
var url1 = 'https://~~~' + cp;
//특정 문자열을 템플릿화
const url2 = 'https://~~~/${cp}';

//매개 변수가 없는 함수일 경우
// y가 들어오지 않을 경우 1
function sum(x, y = 1) {
    return x + y;
}

// 화살표 함수 
const arr = [1, 2, 3];

// 모든 배열 요소를 돌며 +1한 값으로 구성된 새로운 배열을 만든다.
const newArr = arr.map(function (item){
    return item + 1;
})

// 다음과 같이 줄여서 사용할 수 있다. 
const newArr2 = arr.map(item => item + 1);

document
    .getElementById('box')
    .addEventListener('click', (event) => console.log(1));

// 전개 구문
function sum3(x, y, z){
    return x + y + z;
}

console.log(sum3(...arr));
// console.log(sum3(1, 2, 3));

const numbers = [...arr, 4, 5, 6, 7];
console.log(numbers);

arr.push(8);
console.log(arr);
console.log(numbers);

//Rest 파라미터 
function RPram(...param) {
    console.log('Res Parameter');
    console.log(param);
}

RPram(1, 2, 3)

//구조 분해 할당
// 자바스크립트의 점을 줄인다..=> 더 빨라진다?
// var team = obj.team;
// var area = obj.area;
// const {team, area} = obj;

// function getArea(options) {
//     return options.width * options.height;
// }
function getArea({width, height}){
    return width * height;
}

//향상된 객체 리터럴
//프로퍼티와 벨류의 이름이 같을때 사용하면 가독성이 올라간다. 
const studentNum = 1234;
const student = { 
    studentNum,
    playGame(){
        console.log('play');
    },
};
console.log(student);

