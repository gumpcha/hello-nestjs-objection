## 0.1

1. from scratch
1. 필요한 controller, service 추가(basic crud)
1. spec test 같이 진행
  - exception test
  - zest: expect().toEqual()


1. exception handling
1. validation PIPE
  - npm i class-validator 왜 필요하지? 없으면 안 되나?
  - validation pipe가 필요한 npm module임
    - class-validator => 확인해 보기
    - class-transformer => 확인해 보기
  - update-movie-dto에서 최소 하나 이상만 받아들이려면? joi의 or 연산자
1. mapped-types: partialtype, omittype, picktype, intersectiontype 제공
1. typescript
   1. module.get<xxx>(xxx); 이해하기
      - generic임
      - get함수에서 MoviesService라는 동적 type을 처리하도록 함
2. e2e
  - main.ts에서 해주는 app.xxx (validation pipe ...)를 적용해야 됨