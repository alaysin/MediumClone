<template>
  <div id="app">
    <mcv-topbar> </mcv-topbar>
    <router-view />
  </div>
</template>

<script>
import McvTopbar from '@/components/Topbar';
import {actionTypes} from '@/store/modules/auth';
export default {
  neme: 'McvApp',
  components: {
    McvTopbar,
  },
  mounted() {
    console.log('hello app!');
    this.$store.dispatch(actionTypes.getCurrentUser);
  },
};
</script>
