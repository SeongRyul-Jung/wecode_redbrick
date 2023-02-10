# wecode_redbrick

개발 내용
1. **Public Data API**
- [**공공데이터포털**](https://www.data.go.kr/)을 통해 팀원들이 각자 원하는 기능을 OpenAPI를 통해 필요한 데이터를 받아 require, fetch, axios 등 다양한 http 요청 모듈을 사용해보며 어플리케이션으로 구현했습니다.
1. **OAuth 2.0**
- 앞서 개발한 어플리케이션에 OAuth 2.0을 적용하여 팀원 각각 하나의 플랫폼 (kakao, naver, google, facebook, git)을 선정하여 회원가입 및 로그인 기능을 구현 후 가입한 플랫폼을 scope로 삼아 플랫폼에 따라 요청할 수 있는 데이터의 범위를 다르게 설정해보았습니다.
1. **Documentation (Swagger 3.0)**
- OAuth 2.0까지 적용된 어플리케이션에 각 팀원들이 직접 각자의 EndPoint에 대해 Swagger를 활용해 세부적으로 문서화를 진행하였고, 이 과정에서 기존 사용했던 Postman과의 장단점을 비교하고 선택하여 활용할 수 있게 되었습니다.
1. **Performance Testing(JMeter)**
- JMeter를 직접 활용하여 완성된 어플리케이션에 대해 퍼포먼스 테스팅 중 가장 대표적인 스트레스 테스트를 직접 적용해보고 산출된 데이터를 통해 서버의 성능을 측정하고 표, 그래프 등 다양한 도식을 통해 분석해보는 시간을 가졌습니다. ([JMeter](https://www.notion.so/JMeter-f00b4acce8e248e3ba1d0528ee1d8eb1))  **([소프트웨어 테스트](https://www.notion.so/d57e8c453579460d8e33776b3f5de154))**
- 또한 공공기관, 기업 등에서 JMeter등의 성능 테스팅 툴을 활용해 서비스 중인 서버에 대한 보고서를 작성, 배포하고 이를 분석하는 과정을 탐색해보았습니다.
1. **Cloud Infrastructure (Terraform)**
- 코드 인프라스트럭쳐인 Terraform의 기능 및 활용방안을 조사하고 이를 정리하였습니다.  [**(링크)**](https://www.notion.so/Terraform-ba71fb05c8024b2ab99784f8ba96647e)
