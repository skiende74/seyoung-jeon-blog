NextJS 15의 app라우터, mdx-component를 적극적으로 활용하여 관리하는 블로그입니다.

mdx-component를 이용해 mdx를 렌더링하고

server Action으로 통신하고

Form action을 통해 게시글제출을 관리합니다.

남은 변경사항

- 제출전략 변경 : mdx파일을위한 별도의 정적저장소(Git 레포)를 운용 (mdx가 remote에 저장되면서 MDXRemote 기능으로 갈아타야함)
- 구글 OAuth 이용한 인증/인가 기능 구현.
- 인증/인가에 따라 다른 UI 노출
- 만들어진 edit 에디터를 이용해 포스트 업로드 기능 구현
