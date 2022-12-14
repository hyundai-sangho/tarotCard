let 타로_그리기 = document.getElementById('draw');
let 디스플레이 = document.getElementById('display');

타로_그리기.addEventListener('click', () => {
  let 인덱스 = 랜덤으로_카드_가져오기(3);
  let 현재카드 = 카드뭉치[인덱스];

  console.log(디스플레이);

  디스플레이.innerHTML = `<div id="imgBox"><img src="images/${현재카드.사진}.jpg"><h3>${현재카드.이름}</h3><p>${현재카드.설명}</p></div>`;
});

function 카드(이름, 설명, 사진) {
  this.이름 = 이름;
  this.설명 = 설명;
  this.사진 = 사진;
}

let 카드뭉치 = [
  new 카드('광대', "타로 카드의 첫 번째이며, '새로운 출발'을 의미한다. 당신은 자아를 찾기 위하여 여행(모험)을 떠나고 싶어 한다. 카드 속 젊은이는 절벽의 끝을 막 내디디려 하고 있다. <br><br>결과에 관계없이 어떠한 모험을 감수하고 라도 도전하고자 하는 열정과 의지가 엿보인다. 배낭은 아주 작지만, 즉, 가진 것은 비록 별로 없지만, 순수함을 나타내는 백 장미를 손에 쥐고 있다. <br><br>아직 세상은 잘 모르지만, 당신의 등 뒤에는 밝은 태양이 비추고 있다. 비록 당신이 언덕에서 굴러 떨어지더라도 크게 부상 당하지 않을 것이다. 보이지 않는 힘이 당신을 보호하고 있기 때문이다.당신 옆에 강아지가 있다. <br><br>즉, 당신은 혼자가 아니다.당신이 만약 이 카드를 만난다면, 지금 생각하고 있는 어떤 일을 과감하게 도전하라는 암시로 받아 들여도 좋을 것이다. <br><br>그러나 무모한 도전보다는, 철저한 준비를 통하여 당신이 인지하고 있지 못하는 주변의 위험요소를 하나씩 찾아서 제거해 나가지 않으면 안된다.", '광대'),

  new 카드(
    '마법사',
    '타로 카드의 두 번째 이면서, 최초로 번호가 붙는 카드이다. 마법사는 영혼의 세계와 인간 세계와의 다리 역할을 하는 존재이다. 오른 손에는 하늘로 높이 올려진 지팡이가  있으며, 왼손은 땅을 가리킨다. <br><br>영적인 힘의 전달자이며 신과 인간의 중재자이기도 하다. 머리에는 영원의 상징이 있으며, 허리에는 자신의 꼬리를 물고 있는 뱀이 있다. 마법사의 책상 위에는 자연의 4가지 기본 요소인 흙, 바람, 불, 물을 상징하는 물건들이 있다.<br><br>마법사의 예복은 희며(순수함), 소매없는 외투는 붉다(세속적인 경험과 지식). 또 아래쪽에 있는 화단에 핀 꽃들을 보면, 흰 백합과 가시 달린 장미가 섞여있다. 마법사는 대립되는 사물 사이의 중재자이다. <br><br>그는 순수함과 경험, 영혼과 물질, 하늘과 땅 등과 같이 혼합체인 것이다. 그는 광대와 같은 무경험자가 아니며 진실의 스승이다.당신이 타로에서 이 마법사를 만났다면, 당신은 당신의 길을 찾을 수 있도록 돕는 훌륭한 조력자를 만날 수 있을 것이다. <br><br>혹은 당신은 당신 스스로의 경험 속에서 해답을 찾을 수 있을 것이다. 당신이 만약 새로운 일을 시작하는 단계라면 좋은 인연을 만난다는 좋은 징조이기도 하다. <br><br>그러나, 타인의 도움보다는 당신의 발전을 위해 스스로 더 노력하지 않으면 안된다. 도움은 일시적이지만, 당신 스스로 맺은 결실은 영원하기 때문이다. ',
    '마법사'
  ),

  new 카드(
    '여사제',
    "이 카드는 옳고 그름이 명확하고 지혜가 있는 여 사제를 의미한다. 마법사와는 달리 하늘과 땅을 이어 주는 다리 역할을 한다. 이 카드는 뚜렷한 이중성을 내포하고 있다. 그래서 그녀는 흰색과 검정색 두 기둥의 사이에 서 있다. <br><br>그녀는 우리 모두의 마음 속에 있는 내부적인 영혼의 안내자다.그녀의 뒤에는, 비옥함과 풍요로움을 나타내는 많은 씨를 가진 석류나무로 뒤 덮힌 장막이 있다. <br><br>그녀의 다리에는 초승달이 있으며, 성모 마리아를 떠오르게 하는 흰 예복과 푸른 겉옷이 함께 있다. 가슴의 십자가와 손의 토라(모세의 율법)는 그녀가 소유하고 있는 정신적인 힘을 다시 한 번 상기시킨다. <br><br>여 사제는 우리들의 무의식, 그리고 오직 어렴풋하게 또는 꿈에서만 우리들에게 진실을 가르쳐 주는 스승을 나타낸다. 그녀는 자신의 힘을 자랑스럽게 과시하지 않는다. 오히려 조용하게, 때로는 당신에게 '진가를 인정받지 못하는 잠재력'이 있음을 암시한다. <br><br>여사제는, 당신의 문제에 대한 해답을 얻기 위하여 당신 자신의 내부를 깊숙히 들여다 볼 필요성이 있음을 시사한다. B는 Boaz(강인함), J는 Jachin(세우다)이라는 뜻으로 '조화'를 의미하지만, 갈등과 대립의 의미, 즉, 양면성도 함께 가지고 있음을 알아야 한다.",
    '여사제'
  ),
];

function 랜덤으로_카드_가져오기(숫자) {
  let 랜덤_숫자 = Math.floor(Math.random() * 숫자);
  return 랜덤_숫자;
}
