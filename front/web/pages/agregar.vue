<template>
    <v-container grid-list-xs>
        <template v-if="added">
            <h3>
                El tutorial se agrego correctamente!
            </h3>
            <v-btn color="success" @click="addAnotherOne">Agregar otro tutorial</v-btn>
        </template>
<template v-else>
            <v-form
            ref="form"
            v-model="valid"
            >
            <v-text-field
      v-model="tutorial.title"
      :rules="rules"
      label="Titulo"
      required
    ></v-text-field>
    <v-text-field
      v-model="tutorial.description"
      :rules="rules"
      label="Descripcion"
      required
    ></v-text-field>
    <p><b>Como quieres mantener el tutorial?</b></p>
    <v-radio-group v-model="tutorial.hidden">
        <v-radio label="Oculto" value="hidden">
        </v-radio>
        <v-radio label="Publico" value="public"></v-radio>
    </v-radio-group>
                <v-btn color="success" @click="submit">Guardar</v-btn>
            </v-form>
        </template>

<v-dialog v-model="dialog" width="500" transition="dialog-transition">
    <v-card>
        <auth :callback="tutorialRequest"></auth>
    </v-card>
</v-dialog>
</v-container>
</template>

<script>
    import auth from "../components/auth/index.vue"
    export default {
        data: () => ({
            dialog: false,
            added: false,
            valid: false,
            rules: [
                v => !!v || 'Required',
            ],
            tutorial: {
                title: "",
                description: "",
                hidden: "public"
            }
        }),
        components: {
            auth
        },
        methods: {
            submit() {
                this.$refs.form.validate()
                if (!this.valid)
                    return

                if (!localStorage.getItem("jwt"))
                    return this.dialog = true

                return this.tutorialRequest()

            },
            tutorialRequest() {

                this.dialog = false

                this.$axios.post("/tutorials/", this.tutorial, {
                    headers: {
                        authorization: localStorage.getItem("jwt")
                    }
                }).then(response => {
                    this.added = true
                    this.tutorial = {
                        tutorial: {
                            title: "",
                            description: "",
                            hidden: 0
                        }
                    }
                }).catch(error => {
                    console.error(error)
                })
            },
            addAnotherOne() {
                this.added = false
            },
            showLoginSignUpForm() {

            }
        }
    }
</script>