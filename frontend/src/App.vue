<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/todos">Todos</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
