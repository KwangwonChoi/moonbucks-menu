// step1 요구사항 구현을 위한 전략

// 요구사항이 여러개가 있을 때 '우선순위'를 정할 수 있어야한다 
// 요구사항이 앞의 것을 구현해야 뒤에 오는것을 구현할수 있고 반대인 경우도 있기 때문이다
// 의존성이 있을 수 있으므로 개발 전에 내가 구현 해야할 요구사항을 먼저 정리해야한다
// 한문장에 두가지 기능이 있는경우 이를 하나씩 분리할 수 있어야한다

// TODO 메뉴 추가
// -[] 메뉴 이름을 입력받고 엔터키 입력으로 추가한다.
// -[] 추가되는 메뉴의 아래 마크업은  `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입해야 한다.
// -[] 총 메뉴 갯수를 count하여 상단에 보여준다.
// -[] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// -[] 사용자 입력값이 빈 값이라면 추가되지 않는다.

// TODO 메뉴 수정
// -[] 메뉴의 수정 버튼 클릭이벤트를 받아 메뉴 수정 모달창이 뜬다.`prompt` 인터페이스를 활용한다.
// -[] 모달창에서 신규메뉴명을 입력 받고, 확인버튼을 누르면 메뉴가 수정된다.
// -[] 인터페이스?브라우저에서 제공해주는 기능으로 사용자 입력값을 받아 손쉽게 값 업데이트가 가능하다

// TODO 메뉴 삭제
// -[] 메뉴 삭제 버튼 클릭이벤트를 받아 메뉴 삭제 컨펌 모달창이 뜬다. 메뉴 삭제시 브라우저에서 제공하는 `confirm` 인터페이스를 활용한다.
// -[] 확인 버튼을 클릭하면 메뉴가 삭제된다.
// -[] 총 메뉴 갯수를 count하여 상단에 보여준다.


// 요구사항을 정리하고 요구사항에 필요한 지식을 학습하는 방향으로 공부한다
// 모든 프로그래밍 언어에서 기본이 되는 '추기-수정-삭제' 사이클
