<template>
  <div>
    <login-form></login-form>
    <v-divider></v-divider>
    <register-form></register-form>
  </div>
</template>

<script>
    import loginForm from "../components/loginForm.vue"
    import registerForm from "../components/registerForm.vue"

    export default {
        name: 'IndexPage',
        components: {
            loginForm,
            registerForm
        }
    }
</script>