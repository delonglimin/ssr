<template>
  <div>helloworld:{{ userInfo }}</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeServerRender(store) {
    return store.dispatch("getUserInfo");
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
};
</script>
<style scoped>
</style>