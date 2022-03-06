<template>
    <v-container grid-list-xs>
        <h2>Login</h2>
        <v-form
        ref="form"
        v-model="valid">
            <v-text-field
                name="username"
                label="username"
                id="username"
                v-model="username"
                :rules="rules"
            ></v-text-field>
            <v-text-field
                name="password"
                label="password"
                id="password"
                type="password"
                v-model="password"
                :rules="rules"

            ></v-text-field>
            <v-btn
      class="mr-4"
      @click="submit"
    >
      Login
    </v-btn>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: 'loginForm',
        data() {

            return {
                valid: false,
                username: "",
                password: "",
                rules: [
                    v => !!v || 'Required',
                ],
            }
        },
        methods: {
            async submit() {
                this.$refs.form.validate()

                if (!this.valid)
                    return

                this.$axios.post("/auth/login", {
                        username: this.username,
                        password: this.password
                    }).then((response) => {
                        let data = response.data
                        localStorage.setItem("token", data.jwt)
                    })
                    .catch((error) => {
                        console.error(error)
                    })

            }
        }
    }
</script>