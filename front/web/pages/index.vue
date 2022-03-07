<template>
    <v-container grid-list-xs>
        <tutorials-list></tutorials-list>
    </v-container>
</template>

<script>
    import TutorialsList from "../components/tutorials/index.vue"

    export default {
        components: {
            TutorialsList
        }
    }
</script>