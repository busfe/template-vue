<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><ALink href="https://vuejs.org" text="Core Docs"/></li>
      <li><ALink href="https://forum.vuejs.org" text="Forum"/></li>
      <li><ALink href="https://chat.vuejs.org" text="Community Chat"/></li>
      <li><ALink href="https://twitter.com/vuejs" text="Twitter"/></li>
      <br>
      <li><ALink href="http://vuejs-templates.github.io/webpack/" text="Docs for This Template"/></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><Alink href="http://router.vuejs.org/" :text="vue-router"/></li>
      <li><Alink href="http://vuex.vuejs.org/" text="vuex"/></li>
      <li><ALink href="http://vue-loader.vuejs.org/" text="vue-loader"/></li>
      <li><ALink href="https://github.com/vuejs/awesome-vue" text="awesome-vue"/></li>
    </ul>
  </div>
</template>

<script>
import ALink from '../../components/ALink';

export default {
  name: 'HelloWorld',
  components: {
    ALink,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App with dpack'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
