// // BOM

// // 자세한 기능은 MDM사이트에서 확인.
// //window 윈도우 최상위 객체 

// console.log(window.outerWidth);

// console.log(window.name)

// //특정 도메인의 주소를 열 수 있다.
// window.open("https://daum.net")

// //창의 띄운 오프너를 찾는다
// window.opener

// // 띄운창을 닫는다.
// window.close()

// //location을 칠 수있다는것은 window.loaction에서 window가 생략된 것.

// //url에 대한 정보
// // console에 값을 주게되면 이동한다.
// location.href='https://daum.net"'
// //새로고침?
// location.reload

// // 뒤로가기, 이전 값을 가져올 순 없다. 개인정보 때문에
// history.back

// // 앞으로가기, 이전 값을 가져올 순 없다. 개인정보 때문에
// history.go(1)

// // 브라우자 정보를 알 수 있다.
// navigator.userAgent
// navigator.language
// navigator.platform

//--------------------------------------------------------------------------------------------------

// dom 탐색, 생성, 삽입, 제거
// 배열의 CRUD와 같이 많이 사용한다. 마크업에 접근하기 위해 사용한다.

//돔 탐색
// var debug = document.getElementById('debug');
// //변수를 사용하여 메소드를 이용하여 조작할 수 있다. 
// console.log(debug);


// querySelector : CSS선택자를 만족하는 첫번째 Element객체, 없다면 null을 반환한다.
// var box = document.querySelector('.box');
// var box2 = document.querySelectorAll('.box');
// console.log(box);


//dom 생성
//createElement 
const div = document.createElement('div');
div.style.border = "1px solid #000";
div.innerHTML = "Hello?";

// <body>는 탐색을 하지 않아도 바로 가져올 수 있다.
// dom에서는 appendChild로 추가할 수 있다. (W3C DOM에서의 부모관계, 형제관계, 자식관계 개념을 확인할 것!)
document.body.appendChild(div);


// dom 삽입
const span = document.createElement('span');
const textNode = document.createTextNode('hello!');
span.appendChild(textNode);
 document.querySelector('#debug').appendChild(span);
// .innerHTML : createElement(), AppendChild() 과 다르게 직접적으로 객체생성하지 않는다.

//dom 제거

// var debug = document.getElementById('debug');
// debug.remove()

//.removeChild 해당 자식에 접근하고 삭제할 수 있다. 
// const list = document.getElementById('list'); 
// list.removeChild(list.children[0]);

//--------------------------------------------------------------------------------------------------
//이벤트

// 어떤 특정한 Element에 변화가 생기면서 발생하는 모든 사건 
//이벤트에 함수를 주면 이벤트가 실행될 때마다 작동한다.

//이벤트 등록(addEventListener)
// document.body.addEventListener('click', function(){
//     console.log('Clicked'); 
// });


//querySelecter로 특정 Element에 이벤트를 추가할 수 있다.
document.querySelector('.box').addEventListener('click_box', clickbody()
);

function clickbody(){
    console.log('clicked');
}

var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    // arguments : 넘어오는 인자를 모두 볼 수 있는 변수
    console.log(arguments, event, event.type, event.currentTarget);
}
document.querySelector('#debug').addEventListener('click', popup);

//이벤트 위임 패턴 : 이밴트를 일일이 주는 것인 아니라 한번에 준다.
var app = document.getElementById('list');

// for(var i = 0; i < app.children.length; i++){
//     app.children[i].addEventListener('click', function(){
//         console.log(1);
//     });
// }

app.addEventListener('click', function(event){
    if(event.target.nodeName == "LI"){
        console.log(2);
    }
    event.stopPropagation();
}); 

//이벤트는 캡쳐링과 버블링의 단계로 나뉜다.
// 캡처링은 가장 부모노드부터 자식노드로
// 버블링은 가장 자식노드에서 부모노드로

//이벤트 전파 중지 : 2개가 겹쳤을 때 하나만 받고싶다. 
// event.stopPropagation();

//동작이 있는 html의 기본 동작을 멈추고 싶을 때!
var lisk = document.querySelector('#link');
link.addEventListener('click', function(){
    console.log('linkClicked');
    event.preventDefault();
})
