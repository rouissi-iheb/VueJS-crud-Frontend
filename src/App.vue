<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/"><a class="navbar-brand">Licence Keys Manager</a></router-link>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/AddKey"><a class="nav-item nav-link">Add Keys</a></router-link>
          <router-link to="/KeysList"><a class="nav-item nav-link">List Keys</a></router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  
  name: 'App',
  
}
</script>

<style>

</style>
