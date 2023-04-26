## 원티드 프리온보딩 사전과제
<br>
<br>

```md
1. git clone https://github.com/LuisKlopp/wanted-pre-onboarding-frontend.git
2. npm install
3. npm start
```

### 사용 라이브러리
* TypeScript
* Eslint, Prettier
* React Router Dom
* Axios
* Styled Components

<br>
<br>

```bash
📦src
 ┣ 📂account
 ┃ ┣ 📂data
 ┃ ┃ ┗ axiosInstance.ts
 ┃ ┣ 📂hooks
 ┃ ┣ ┗ useAuth.ts
 ┃ ┣ Signin.tsx
 ┃ ┣ SignUp.tsx
 ┣ 📂style
 ┃ ┗ style.tsx
 ┣ 📂todo
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ useTodo.ts
 ┃ ┣ Todo.tsx
 ┣ 📂token
 ┃ ┗ token.ts
 ┣ App.tsx
 ┣ Main.tsx
 ┗ index.ts
```

### 주요 파일과 구현 설명
* SignIn과 SignUp 페이지를 똑같은 모양으로 구현하여 useAuth hooks 하나만으로 이메일과 비밀번호를 한번에 제출할 수 있게 구성했습니다.
* 기본적으로 보여지는 페이지는 SignIn.tsx SignUp.tsx Todo.tsx 입니다.
* Todo에서도 hooks를 분리하여 useTodo.tsx 컴포넌트에서는 보여지는 부분만 리턴할 수 있게 했습니다.
* token.ts에서는 모듈화하여 토큰을 로컬스토리지에 저장하고 가져오고 지우는 역할을 할 수 있게 따로 뺐습니다.

### 배포링크 : https://wanted-pre-onboarding-frontend-ashy.vercel.app/

<br>
<br>

<img src= "https://user-images.githubusercontent.com/108189281/231074381-ccb6fb9c-2bb6-4ee4-8d83-984f206dd538.gif" width="40%" height="40%">
<img src= "https://user-images.githubusercontent.com/108189281/231075537-a71be786-9879-4925-8f2f-22ffb2ee6e13.gif" width="40%" height="30%">
