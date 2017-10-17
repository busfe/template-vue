<template>
  <a :href="href" :target="target">{{text}}</a>
</template>
<script>
  export default {
    name: 'ALink',
    props: {
      href: {
        type: String,
        default: 'javascript:void(0);'
      },
      text: {
        type: String, 
        default: ''
      },
      target: {
        type: String,
        default: '_blank'
      }
    }
}
</script>
