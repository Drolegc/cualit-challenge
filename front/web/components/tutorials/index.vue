<template>
    <v-container grid-list-xs>
        {{tutorials}}
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            tutorials: []
        }),
        created() {
            this.$axios.get("/tutorials/").then(response => {
                this.tutorials = response.data
            })
        }
    }
</script>