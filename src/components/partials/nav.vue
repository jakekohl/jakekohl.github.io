<template>
    <nav class="navbar container" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <strong class="is-size-4">Jake Kohl</strong>
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbar" class="navbar-menu">
        <div class="navbar-start">
          <router-link aria-label="home" to="/" class="navbar-item">Home</router-link>
          <router-link aria-label="about" to="/about" class="navbar-item">About</router-link>
          <router-link aria-label="latest-commits" to="/latest-commits" class="navbar-item">Latest Commits</router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-dark">
                <strong>Sign In</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>
<style lang="scss" scoped>
    nav {
      margin-top: 25px;
      margin-bottom: 30px;
      a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          color: #d88d00;
        }
      }
    }
</style>

<script>
export default {
    name: 'Nav'
};
</script>