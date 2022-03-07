<template>
    <v-container grid-list-xs>
        <h2>No se encontro ningun tutorial con el titulo <b>{{title}}</b></h2>
        <a @click="$emit('resetSearch')">Mostrar todos</a>
    </v-container>
</template>

<script>
    export default {
        name: 'notFound',
        props: ['title']
    }
</script>