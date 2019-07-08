<template>
    <div class="contain">
        <v-head></v-head>
        <router-view></router-view>
        <v-footer></v-footer>
    </div>
</template>
<script>
import vHead from '../components/head.vue'
import vFooter from '../components/footer.vue'
export default {
  name: 'contain',
  data() {
      return {

      };
  },
  components: {
      vHead,
      vFooter
  }
}
</script>
<style lang="less" scoped>
.contain {
    text-align: center;
}
</style>

