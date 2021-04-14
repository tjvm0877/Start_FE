//현재 상자들의 상태가 빨강인지 파랑인지 확인
var isRed = false;

// 현재 토글 상태 확인
var istoggle = false;

var boxCount = 1;

addRed();
addBox();
deleteBox();
addtext();
resetBox();
toggleBox();
addimage();

//.add-red 클릭하면 .box class속성에 .red를 추가
function addRed(){
    var $add_red = document.querySelector('.add-red');
    $add_red.addEventListener('click', function(){
        var box = document.querySelectorAll('.box');
        for(var i = 0; i < box.length; i++){
            box[i].classList.add('red');
        }
        isRed = true;
    });
}

//.add-btn 클릭하면 .box 엘리먼트를 body 에 하나씩 추가
function addBox() {
    var $add_btn = document.querySelector('.add-btn');
    $add_btn.addEventListener('click', function() {
        var div = document.createElement('div');
        div.classList.add('box');
        //박스들의 상태가 빨강이라면 red 추가
        if (isRed) {
            div.classList.add('red');
        }
        document.body.appendChild(div);
        boxCount++;
    })
}

// .delete-btn 클릭하면 모든 .box 엘리먼트를 하나씩 삭제
function deleteBox() {
    var $delete_btn = document.querySelector('.delete-btn');
    $delete_btn.addEventListener('click', function(){
        var box = document.querySelector('.box');
        box.remove();
        boxCount--;
    });
}

// .text-btn 클릭하면 .txt에 value값을 가져와서 .box에 가져온 value값 텍스트 추가
// .box 엘리먼트가 여러개 있을경우 동일하게 추가
function addtext() {
    var $text_btn = document.querySelector('.text-btn');
    $text_btn.addEventListener('click', function() {
        var box = document.querySelectorAll('.box');
        var txt = document.querySelector('.txt');
        for (var i = 0; i < box.length; i++) {
            box[i].innerHTML = txt.value;
        }
    })
}

// .reset-btn 클릭하면 모든 .box 엘리먼트 제거
function resetBox() {
    var $reset_btn = document.querySelector('.reset-btn');
    $reset_btn.addEventListener('click', function() {
        var box = document.querySelectorAll('.box')
        for (var i = 0; i < box.length; i++) {
            box[i].remove();
        }
        boxCount = 0;
    });
}

//.toggle-btn 클릭하면 .box 엘리먼트 숨기고 다시 클릭하면 보이게 토글버튼 처리면
function toggleBox() {
    var $toggle_btn = document.querySelector('.toggle-btn');
    $toggle_btn.addEventListener('click', function() {
        var box = document.querySelectorAll('.box');
        // 숨겨지지 않았을 경우 숨기기
        if (!istoggle) {
            for (i = 0; i < box.length; i++) {
                box[i].style.display = 'none';
            }
            istoggle = !istoggle;
        }
        // 숨겨졌을 경우 다시 보이기
        else if (istoggle) {
            for (i = 0; i < box.length; i++) {
                box[i].style.display = 'block';
            }
            istoggle = !istoggle;
        }
    });
}

// .image-btn 클릭하면 .box 엘리먼트에 이미지 출력
// 이미지 주소: https://i.imgur.com/69NjYBH.png
// .box 엘리먼트가 없을경우 생성후 처리
function addimage() {
    var $image_btn = document.querySelector('.image-btn');
    $image_btn.addEventListener('click', function() {
        console.log(boxCount);
        if (boxCount === 0) {
            var div = document.createElement('div');
            div.classList.add('box');
            //박스들의 상태가 빨강이라면 red 추가
            if (isRed) {
                div.classList.add('red');
            }
            document.body.appendChild(div);
            boxCount++;
        }
        var box = document.querySelectorAll('.box');
        for (i = 0; i < box.length; i++) {
            var image = 'https://i.imgur.com/69NjYBH.png';
            // var imagesrc = '<img src = ${image} >'; 템플릿 표현식 왜안되지?
            var imagesrc = '<img src ='+ image +' style="width:100px; height:100px;" >';
            box[i].innerHTML = imagesrc
        }
    });
}