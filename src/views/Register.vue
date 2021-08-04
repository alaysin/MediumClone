<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-ceter">Sign Up</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'login'}">Nave an account?</router-link>
          </p>
          <mcv-validation-errors v-if="validationErrors" :validation-errors="validationErrors"></mcv-validation-errors>
          <form @submit.prevent="onSubmit">
            <fieldset class="fomt-group">
              <input type="text" class="form-control-lg" placeholder="Username" v-model="username" />
            </fieldset>
            <fieldset class="fomt-group">
              <input type="text" class="form-control-lg" placeholder="Email" v-model="email" />
            </fieldset>
            <fieldset class="fomt-group">
              <input type="text" class="form-control-lg" placeholder="Password" v-model="password" />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" :disabled="isSubmitting">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import McvValidationErrors from '@/components/ValidationErrors';
import {actionTypes} from '@/store/modules/auth';
export default {
  name: 'McvRegister',
  components: {
    McvValidationErrors,
  },
  data() {
    return {
      email: '',
      password: '',
      username: '',
    };
  },
  computed: {
    ...mapState({
      isSubmitting: (state) => state.auth.isSubmitting,
      validationErrors: (state) => state.auth.validationErrors,
    }),

    // isLoggedIn() {
    //   return this.$store.state.auth.isSubmitting;
    // },
    // validationErrors() {
    //   return this.$store.state.auth.validationErrors;
    // },
  },
  methods: {
    onSubmit() {
      console.log('subbmitted form');
      this.$store
        .dispatch(actionTypes.register, {
          email: this.email,
          username: this.username,
          password: this.password,
        })
        .then((user) => {
          console.log('successfully register user', user);
          this.$router.push({name: 'globalFeed'});
        });
    },
  },
};
</script>
