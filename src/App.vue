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
    },
    created() {
      this.$store.dispatch("getTradeResult")
      this.$store.dispatch("initApp")
    }
  }

</script>

<style></style>
