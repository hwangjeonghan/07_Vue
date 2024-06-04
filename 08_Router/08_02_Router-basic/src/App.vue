<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <h1>Router 사용하기</h1>
    <div class="wrapper">
      <!-- <h2> basic Router</h2>
      <nav>
        <RouterLink to="/" replace active-class="active">Home</RouterLink>
        <RouterLink to="/pathvariable/1" replace active-class="active">pathVariable</RouterLink>
        <RouterLink  to="/querystring?name=홍길동&age=20" replace active-class="active">querystring</RouterLink>
      </nav> -->

      <h2>NestedRouter</h2>
      <nav>
        <RouterLink to="/" replace active-class="acive">Home</RouterLink>
        <RouterLink to="/nested">중첩 인덱스</RouterLink>
        <RouterLink to="/nested/view">중첩 라우터</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView/>
  </main>

</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  font-size: 30px;
}

a {
  margin-left: 10px;
}

.active {
  color: red;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header {
  text-align: center;
}
</style>
