# 3주차 Node.js   스터디 내용

아직 DB을 연결하는 건 진도가 안나간 것 같아. 연습용으로 API를 구상했던 결과물을 올립니다.

![Untitled](./img/Untitled%20(1).png)

netflix 의 컨텐츠 상세페이지 뷰 가 만들어 지기 위해, 어떤 route, 어떤 res가 필요한지 생각해보았습니다.

`route : GET {IP_ADDRESS}:{PORT}/media/{mediaId}/detail`

예상 res

{
    title: string,
    mediaInfo : {
        thumbnail : string,
        length : number,
        quality : string,
        seriesNum : number,
        age : number
    },
    contentInfo : {
        createYear: number,
        actors : string[],
        genre : string[],
        character : string,
        summary : string
	},
    userInfo : {
        currentTime : number,
        isLike : boolean
    }
}

## 1. typescript 사용

> javascript는 유용하지만 인터프리터 언어의 특징인 느린 실행과 지나치게 널널한 타입으로 많은 문제를 야기합니다. 
이를 해결하기 위한것이 typescript 입니다. 사실 완전히 새로운 언어는 아니고, ‘jacascript + **syntactic sugar’** 이라고 생각하면 됩니다.
왜나면 말그대로 js 위에 ts의 문법을 적용시켰을 뿐 런타임은 그대로이기 때문입니다.~~(그래서 ts상에서는 에러지만 js에선 허용인 문법은 실행이 되긴합니다.)(추가로 ES6의 Class 또한 Syntactic sugar입니다. 자바스크립트는 프로토타입기반 언어라서 Class는 기능이 있지만 눈속임용이고 코드 뜯어보면 프로토타입으로 동작함)~~
> 

### ts의 장점

기존 동적으로 움직이는 자바스크립트와 달리 정적인 타입을 지원하기때문에 컴파일 단계에서 에러를 잡아낼수 있습니다. 즉 코드 작성 단계에서 타입을 체크하며 에러를 확인가능합니다. → 디버깅이 훨씬 편함

```bash
let Number : number = 3
```

## 2. url 패턴 사용과 라우터 분리

`GET {IP_ADDRESS}:{PORT}/media/{mediaId}/detail`

루트에 파마리터를 사용해, 컨텐츠 이름을 받아오도록 했습니다.

그리고 이를 middle ware chaining을 통해 컨텐츠 이름을 검증하여 특정 url에서만 정보가 나가도록했습니다.

![Untitled](./img/Untitled.pngUntitled.png)

나중에 DB를 연결하면 이 부분에서 존재하는 컨텐츠인지 등등을 검증할 수 있을 것.

일단 media 라우터 media 안에서도  detail 부분은 따로 라우터를 분리했는데, 사실 그렇게 효율적인 분리는 아니라서 나중에 route를 설계할때는 좀 더 효율적으로 짜야겠다고 생각했습니다.