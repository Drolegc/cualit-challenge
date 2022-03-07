<template>
    <v-container grid-list-xs>
        <div>
            <div class="d-flex align-center">
                <v-text-field
            label="Buscar"
            v-model="search"
          ></v-text-field>
          <v-btn @click="searchTutorial"  color="blue" icon ><v-icon>
            mdi-magnify
          </v-icon></v-btn>
            </div>
          <v-btn 
          v-show="search != ''"
          @click="cleanSearch"
          color="red" outlined>Limpiar</v-btn>
        </div>
        <v-row>
            <v-col
            md="6"
            >
            <v-card>
                <v-card-title primary-title>
                    Tutoriales
                </v-card-title>
                <v-card-text>
                    <v-list-item v-for="tutorial in tutorials" @click="selectedTutorial = tutorial">
                        <v-list-item-content>
                          <v-list-item-title :class="selectedTutorial === tutorial ? 'font-weight-black' : ''">{{tutorial.title}}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="red" outlined>Limpiar todas</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
            <v-col
            md="6"
            >
        <v-card>
            <v-card-title primary-title>
                Tutorial
            </v-card-title>
            <v-card-text>
                <p><b>Titulo: </b>{{selectedTutorial.title}}</p>
                <p><b>Descripcion: </b>{{selectedTutorial.description}}</p>
                <p><b>Estado: </b>{{selectedTutorial.published_status ? 'Publicado' : 'Oculto'}}</p>
                <v-btn color="warning">Editar</v-btn>
            </v-card-text>
        </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'tutorialList',
        props: ['tutorials'],
        data: () => ({
            selectedTutorial: {},
            search: ''
        }),
        methods: {
            searchTutorial() {
                this.$emit('searchTutorialsWith', this.search)
            },
            cleanSearch() {
                this.search = ''
                this.searchTutorial('')
            }
        }
    }
</script>