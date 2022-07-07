# 트리플 사전 과제

[트리플 홈페이지](https://triple.guide/intro/)의 한 섹션을 구현합니다.

# 프로젝트 실행 방법

📌  프로젝트 클론

📌  클론 받은 위치로 이동

📌  `yarn install && yarn build && yarn start`

# 사용한 기술과 선택한 이유

### TypeScript
- 정적 타입 시스템을 할용해서 개발자가 예기치 못하는 오류를 미연에 방지하고, 프로젝트가 더 커졌을 때 생산성을 키울 수 있습니다.

### Create-React-App
- 과제 수준에서 빠르게 개발하는 것이 중요한 것이라 생각해서 가장 많이 사용되고, 익숙한 보일러 플레이트인 CRA를 활용했습니다.

### Styled-Reset
- 브라우저들마다 기본으로 설정되어있는 CSS 스타일 값을 초기화하여 개발자가 의도한 디자인이 모든 브라우저에서 보이도록 합니다.

### Styled-Components
- CSS-in-JS로 자바스크립트(타입스크립트) 코드에서 함께 작성하며 CSS 파일과 JS 파일을 오갈 필요가 없기 때문에 생산성에 이점이 있습니다.
- 또한 변수를 파라미터로 함께 공유하므로써, 재사용 가능한 스타일링을 할 수 있습니다.

### Craco
- 상대경로로 모듈을 불러오게 되면, 프로젝트가 커졌을 때 참조하는 폴더가 많아질수록 복잡해져 가독성이 떨어지게 됩니다.
- 절대경로로 모듈을 불러오도록 설정하되, CRA의 경우 편의성을 위하여 웹팩 등 설정을 숨겨놓았는데, 이것을 eject하지 않고도 수정할 수 있게 합니다.

# 파일 구조
```
// root/src

├── App.tsx
├── Pages
│   ├── Section.tsx
│   └── index.ts
├── asset
│   ├── image
│   │   ├── badge-apple4x.png
│   │   ├── image.d.ts
│   │   ├── image_container.ts
│   │   ├── play-store2x.png
│   │   └── triple2x.png
│   └── index.ts
├── components
│   ├── Badge.tsx
│   ├── IndicatorText.tsx
│   ├── index.ts
│   └── universial
│       ├── Container.tsx
│       ├── Img.tsx
│       ├── Margin.tsx
│       └── Text.tsx
├── constants
│   ├── colors.ts
│   └── index.ts
├── hooks
└── index.tsx
```
- `Section.tsx`: 최종 작성된 섹션

- `src/asset`: 이미지 등 에셋
- `src/components`: 각종 컴포넌트 
- `src/constants`: 색, 테마, 문자열 등을 저장
