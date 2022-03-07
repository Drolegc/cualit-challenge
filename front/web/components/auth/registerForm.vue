<template>
    <v-container grid-list-xs>
        <h2>Register</h2>
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
      ACEPTAR
    </v-btn>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: 'registerForm',
        props: {
            callback: {
                type: Function,
            }
        },
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

                this.$axios.post("/auth/register", {
                    username: this.username,
                    password: this.password
                }).then(response => {
                    let data = response.data

                    localStorage.setItem("jwt", data.jwt)
                    this.callback()

                }).catch(error => {
                    console.error(error)
                })

            }
        }
    }
</script>