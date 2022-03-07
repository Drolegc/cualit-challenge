<template>
    <v-container 
    grid-list-xs>
        <login-form
        v-if="showLoginForm"
        :callback="callback"
        ></login-form>
        <register-form 
        :callback="callback"
        v-else
        ></register-form>
        <v-btn
        @click="showLoginForm = !showLoginForm" 
        color="warning">
    <v-card-actions>
        <span v-if="showLoginForm" >
            Register
        </span>
        <span v-else>
            Login
        </span>
    </v-card-actions>
    </v-btn>
    </v-container>
</template>

<script>
    import loginForm from "./loginForm.vue"
    import registerForm from "./registerForm.vue"

    export default {
        props: ['callback'],
        data: () => ({
            showLoginForm: true
        }),
        components: {
            loginForm,
            registerForm
        }
    }
</script>