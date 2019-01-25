<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Suivis</router-link> |
      <router-link to="/add">Nouveau suivi</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display:flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

}
#nav {
  padding: 30px;
  display: flex;
  
}
a {
    font-weight: bold;
    color: #42b983;
  }

  h2{
    font-size: 0.97rem;
  }
</style>
