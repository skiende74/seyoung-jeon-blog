NextJS 15의 app라우터, mdx-component를 적극적으로 활용하여 관리하는 블로그입니다.

mdx-component를 이용해 mdx를 렌더링하고

server Action으로 통신하고

Form action을 통해 게시글제출을 관리합니다.

남은 변경사항

- 구글 OAuth 이용한 인증/인가 기능 구현.
- 인증/인가가 된 사람만 글 수정 기능 가능 (쿠키를 통한 access/refresh 토큰관리)

고려한 사항

- 제출전략 변경 : mdx파일을위한 별도의 정적저장소(Git 레포)를 운용 (mdx가 remote에 저장되면서 MDXRemote 기능으로 갈아타야함)
  -> mdx와 코드는 같은 레포지토리에 두기로 하였음. 빌드시간이 40s밖에 되지않기때문에, 인프라복잡성과 MDXRemote를 사용해서 원격저장소를 감수하는 것보다 나을 것이라 판단함.
- 글 작성/편집 기능 : 마크다운에디터를 직접 만들어 구현 함.
  -> 작성/편집시에만 마크다운 에디터를 쓸 경우, 작성시점과 실제보이는 글 모양이 달라질 수 있기때문.
  그리고 직접만드는 것이 더 단순.
