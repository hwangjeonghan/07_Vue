<script setup>
  import {ref, computed, onUpdated} from 'vue';
  import Home from "./views/components/Home.vue";
  import About from './views/components/About.vue';
  import NotFound from './views/components/NotFound.vue';

  const routes ={
    '/' : Home,
    '/about' : About
  }
  // 윈도우의 현재 라우트를 탐색하는 과정
  const currentPath = ref(window.location.hash);
  console.log(currentPath.value);

  onUpdated(()=>{
    console.log(currentPath.value);
  })

  // 브라우저 주소창에 # 해시 부분 변경을 감지하고 이벤트가 발생했을 때 실행할 콜백 함수를 등록하는 리스너
  // addEvnetListner : 이벤트를 등록함
  // hashchange : # <- 부분의 변경을 감지함
  // () => {} : 실행할 콜백 함수를 등록하는 리스너
  window.addEventListener("hashchange", ()=>{

    currentPath.value = window.location.hash;
  });

  // routes에 key를 기반으로 컴포넌트를 리턴하여 화면에 랜더링하기 위한 목적
  const currentView = computed(()=>{
    return routes[currentPath.value.slice(1) || '/'] || NotFound
  })
</script>

<!-- 
  routing 
  서버 라우팅은 클라이언트에서 요청한 url 리소스에 따라 서버에서 어떤 작업을 수행할지 결정하는 것을 의미한다.
  서버 라우팅 방식은 새로운 페이지 요청을 서버로 전달하면 서버측에서 html을 응답하고 응답받은 html을 
  브라우저에 다시 로드하는 과정이다.

  그러나 spa(sing - page - application)에서는 클라이어늩 측 자바스크립트가 전체 페이지를 다시 로드하지 않고
  일부분만 동적으로 갱신되는 애플리케이션을 의미하며 서버 라우팅은 웹 애플리케이션에 새로운 페이지를 로드할 때마다 
  전체 페이지를 새로고침해야 했으나, spa는 초기 페이지 로드 이후 페이지를 새로고침하지 않고
  필요한 데이터만 방아 동적으로 페이지 일부분을 업데이트하게 된다.
  이러한 spa의 라우팅은 클라이언트 측, 브라우저에서 수행되며 서버에는 데이터만 요청하는 방식이다.

  vue에서 라우팅을 하기 위해서 vue  router를 설치해야한다.
  npm install vue-router@next

  vue의 routing
  vue는 url 리소스를 설정할 때 url 속성에 #을 추가하여 리소스를 등록하게 되는데
  이는 vue에서 브라우저의 기본 동작을 방지하기 위함으로 만약 #을 추가하지 않으면
  자바스크립트를 사용하여 네비게이션을 제어하게되며 기존 방식대로 서버 라우팅을 처리하게 된다.
  이렇게 되면 기존 반응성 변수의 상태를 잃어버리기 때문에 주의가 필요하다.

 -->

<template>
  <main>
    <ul>
      <caption>router</caption>
      <li><a href="#/">home</a></li>
      <li><a href="#/about">about</a></li>
      <a href="#/non-existent-path">Broken link</a>
      <component :is="currentView"/>
    </ul>
    <hr>    
    <ul>
      <caption>non - Router</caption>
      <li><a href="/">home</a></li>
      <li><a href="/about">about</a></li>
      <a href="/non-existent-path">Broken link</a>
      <component :is="currentView"/>
    </ul>


  </main>
</template>

<style scoped>
</style>
