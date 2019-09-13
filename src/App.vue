<template>
  <div id="app">
    <header>
      <h1>++</h1>
      <h2>v0.1</h2>
      <div id="nav">
        <!-- <router-link to="/">words</router-link> | -->
        <router-link to="/">projects</router-link>
        <router-link to="/about">about</router-link>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Stratos', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header h1 {
  margin-top: -20px;
  font-size: 8em;
  margin-bottom: -20px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.5em;
}

#nav a.router-link-exact-active {
  color: orangered;
}

main {
  padding: 2px;
  width: 100%;
  margin: 0 auto;
}

footer {
  position: absolute;
  bottom: 0;  
  text-align: right;
}
</style>
