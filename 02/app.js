console.log('app.js');

// 객체 정의 
var person = {
    nick: 'FE',
    age: 28,
    area: 'jeju',
    hobby: ['js', 'html']
};
/*
이 부분을 JSON의 형태와 같다.
    nick: 'FE',
    age: 28,
    area: 'jeju',
    hobby: ['js', 'html']
*/

// 배열 선언, 자주사용되는 데이터 타입이기 때문에 여러 메소드를 지원한다. 
var arr = [1, 2, 3];

// 배열 CRUD
// Create
var todos = ['게임', '코딩'];
var todo = '운동';
todos.push(todo);
console.log(todos);

// Read
todos.forEach(function(todo){
    console.log(todo);
});

// update
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo){
    return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);

// map : 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
updateTodo = '공부';
var newTodos = todos.map(function(todo){
    if(todo === updateTodo) {
        return '게임'
    }
    return todo;
});
console.log(newTodos);

// Delete
var deleteTodo = '게임';

// splice : 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
var deleteIndex = todos.findIndex(function(todo){
    return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);

// var deleteTodo2 = '공부';
// var newTodos = todos.filter(function(todos){
//     return todo !== deleteTodo2;
// });
// console.log(newTodos)


//타입변환
//JS는 느슨한 언어이기 때문에 타입을 지정하지 않고 자동변환도 가능하다. 동적타이핑이 가능.
var foo = 42; //number
var foo = 'bar'; // String
var foo = true; // Boolen

if("test"){ // true로 자동 변환
    console.log("true");
}

/* 
"2" + 2; // "22"
2 + 5 + "1" // "71"
연산이나 비교를 할 때 타입을 정확하게 인지해야 버그를 줄일 수 있다!
*/

/*
원시타입 : 변수에 할당될 때 메모리상에 고정된 크기로 저장되고 해당 변수가 원시 데이터의 값(Value)로 보관
- Number
- String
- Boolen
- Null
- undefined

참조타입 : 변수에는 데이터에 대한 참조(referance)만 저장, 
- Object
- Array
- Function
*/


var a = 1;
var b = a;
b = 2;
console.log(a, b) // 1 2

var c = [1];
var d = c;
d[0] = [2];
console.log(c, d); // 두 배열 모두 [2]로 된다.

var e = { x: 1};
var f = e;
e.x = 2;
console.log(e,f); // 모두 2로 바뀐다.

//Call by value
function byValue(count){
    count = count +2;
}

var count = 3;
byValue(count);
console.log(count); //3

//call by reference
function byReference(count){
    count.push('2');
}
var count2 = ['1'];
byReference(count2);
console.log(count2); // ["1", "2"]


//if, 조건문
var isMan = true;
if (isMan){
    console.log('나는 남자');
}
else if(isMan && isHero){
    console.log('????')
}
else {
    console.log('나는 여자')
}

// var genter = isMan ? '남자' : '여자'; //삼항 연산자

//for문
for (var forCount = 0; forCount < 5; forCount++){
    //총 5번 실행
    console.log('hi?')
}

//while문
var isClosed = true;
while (isClosed) {
    //반복코드

    //false로 만들어서 투표 종료
    isClosed = false;
    break;
}

//함수
function sum(x) {
    var y = 1;
    return x + y;
}

//try, catch, finally : 에러가 발생할 수 있는 구문에서 사용
try{
    //이 부분 실행시 예외가 발생할 경우 catch로 이동
}
catch(e){
    //예외가 발생할 경우에만 실행
}
finally{
    //무조건 실행
}

//주요 전역 함수

// window.alert('안녕하세요?') //함수도 맞고 메소드도 맞다?, 실행을 멈추고 alert창을 띄워준다.

// var who = prompt('당신은 누구인가요?'); //질문을 뭍는 UI를 만들어준다. 치면 사용자가 입력한 값을 할당할 수 있다.

// confirm('정말 삭제하시겠습니까?'); //true, false로 값이 넘어온다. 

// isNaN('1'); // false , 숫자가 아닐때만 true를 반환한다.

// parseInt('12'); // 문자열을 숫자로 바꿔준다.

// function setTest(){
//     console.log('setTest()');
// }

// var id = setTimeout(setTest, 1000); // 1초 후 1번실행

// var id = setInterval(setTest, 1000); // 1초마다 계속 실행

function setTest(){
    console.log('setTest()');
    setInterval(setTest, 1000);
}


//스코프 : JS에서는 함수 스코프를 가진다. 함수안에서 외부에 있는 변수드를 함부로 가져가다 쓰면 꼬이게 된다. 왠만하면 함수 내에서 쓰고 외부인자가 필요한 경우 인자로 넘겨줘야한다.
var hisName = 'aji';
function scopeTest(){
    var age = 30;
    console.log(hisName, age);
} 
scopeTest();
// console.log(age); 전역에서는 함수 안에있는 변수를 가져올 수 없다.


/*
호이스팅(Hoisting)?
var 구문, function선언문을 해당 scope의 가장 처음으로 옮기는 것, 항상 상단에서 변수 선언 사용 권장.
*/

/*
함수 : 한 번 정의하면 몇 번이든 실행할 수 있고 호출 할 수 있는 JS코드블록
메소드(method) : 어떤 객체의 속성으로 저장된 JS함수
JS함수는 다른 함수 내에 중첩되어 정의도 가능하다!
*/
function sum(first,second){
    return first + second; //return이 없음 undefined가 나온다.
}

console.log(sum(2,3));


//멤버 변수
var car = {
    year: '2014',
    starting: function(){
        console.log('starting..');
    },
};
car.starting();

//익명 함수표현식
var fucCar = function(){
    //코드
};
//중첩함수

// 익명 즉시실행함수, 스코프 보호, 함수를 만들자마자 실행해버리는 코드, 외부에서 사용할 수 없도록하여 캡슐화와 비슷한 효과를 낸다.
(function(){
    //코드
    var a = 'a';
    console.log(a);
})();

//생략 가능 전달인자
function sum2(x, y){
    if (!y) y = 1;
    console.log(x + y);
}
sum2(3); // 4
sum2(2, 4); // 6

// 가변 길이 인자 인자의 갯수를 정하지 않고 함수 안에서 가변길이로 받을 수 있다.

// 함수에도 기본 프로퍼티와 메소드가 있다.

// 표현식 : 코드상에서 데이터를 표현하는 방법.

// 정규표현식 : 문자열에 나타나는 특정 문저 조합과 대응시키기 위해 사용되는 패턴
var text = 'abc def ghi jkl';
var testReg = /abc/;
var result = testReg.test(text);

console.log(result);


var sum = 0;
var transType = 0;
console.log(typeof(sum));
while(true){
    var get = prompt("더할 숫자를 입력해 주세요.");
 

    if(get != null){
        if(!isNaN(get)){ //숫자일 때
            transType = parseInt(get);             
            sum += transType;
        }else{ //숫자가 아닐때
            console.log("숫자가 아니다.");
            continue;
        }
    }else{
        alert("숫자의 총 합은:"+ sum);
        break;
    }
}