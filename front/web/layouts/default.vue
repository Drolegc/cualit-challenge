<template>
    <v-app>
        <v-app-bar
        app
        absolute
        class="elevation-0 primary"
      >
      <v-btn 
      color="white"
      @click="$router.push('/')"
      plain>Tutos.com</v-btn>
      <v-btn 
      color="white"
      @click="$router.push('/')"

      plain>Tutoriales</v-btn>
      <v-btn 
      color="white"
      @click="$router.push('/agregar')"
      plain>agregar</v-btn>
        </v-app-bar>
        <v-main>
            <nuxt></nuxt>
        </v-main>
    </v-app>
</template>