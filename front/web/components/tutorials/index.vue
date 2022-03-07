<template>
    <v-container grid-list-xs>
            <empty-tutorials v-if="tutorials.length === 0 && !showNotFound"></empty-tutorials>
        <tutorial-list  v-else-if="!showNotFound" :tutorials="tutorials" @searchTutorialsWith="searchTutorialsWith"></tutorial-list>
        <not-found v-else @resetSearch="searchTutorialsWith('')"></not-found>
</v-container>
</template>

<script>
    import emptyTutorials from "./empty.vue"
    import tutorialList from "./list.vue"
    import notFound from "./notFound.vue"
    export default {
        data: () => ({
            tutorials: [],
            showNotFound: false
        }),
        created() {
            this.$axios.get("/tutorials/").then(response => {
                this.tutorials = response.data
            })
        },
        methods: {
            searchTutorialsWith(search) {
                if (search == '') {
                    this.$axios.get("/tutorials/").then(response => {
                        this.tutorials = response.data
                        this.showNotFound = false
                    })
                    return
                }

                this.$axios.get(`/tutorials?title_includes=${search}`).then(response => {
                    this.tutorials = response.data
                    this.showNotFound = response.data.length === 0
                })
            }
        },
        components: {
            emptyTutorials,
            tutorialList,
            notFound
        }
    }
</script>