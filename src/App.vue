<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import header from './component/shared/Header'
  import footer from './component/shared/Footer'
  export default {
    components:{
        appHeader:header,
        appFooter:footer,
    }
  }

</script>

<style></style>
