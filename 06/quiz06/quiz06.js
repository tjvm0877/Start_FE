const $btn = document.getElementById("btn");
const $num = document.getElementById("num");
const $result = document.getElementById("result");

$btn.addEventListener('click', (event) => {
    if ($num.value === "") {
        alert("숫자를 입력하세요.")
    }
    // html에서 type를 number로 해놨기 때문에 여기서 숫자인지 문자열인지 확인할 필요 없음!
    // else if (isNaN($num.value)) {
    //     alert("숫자로 입력해주세요!")
    // }
    else {
        $result.innerHTML = multiplication($num.value);
    }
});


function multiplication(input) {
    let result = "";
    for (i = 1; i <= 9; i++) {
        result += `<p> ${input} * ${i} = ${input * i} </p>`;
    }
    return result;
}

