const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const $showMoreBtn = document.querySelector('#showMore-btn');

const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK 6b9f484fd295646c5128115d8e9c0243' };
let apiSize = 10;

function success(data) {
  const { documents } = data;
  const li = documents.map((doc) => {
    return `<li class="list-group-item"><a href="${doc.url}" target="_blink">${doc.contents}</a></li> `;
  });

  $result.innerHTML = `<ul class="list-group list-group-flush">${li.join(
    '',
  )}</ul>`;
}

function error() {
  alert('데이터를 찾을 수 없습니다 ㅠㅠ');
}

function search() {
  const { value } = $text;
  if ($text.value === '') {
    alert('검색어를 입력해주세요');
    return false;
  }

  fetch(`${url}?query=${value}&size=${apiSize}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);

  apiSize += 10;
  console.log(apiSize);
  return true;
}

function reload() {
  while ($result.hasChildNodes()) {
    $result.removeChild($result.firstChild);
  }
}

function showMore() {
  reload();
  search();
}

$btn.addEventListener('click', search);
$showMoreBtn.addEventListener('click', showMore);
