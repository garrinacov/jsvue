<template>
<div>
  <app-toolbar></app-toolbar>

   <v-layout class="content_Home" row wrap>
    <v-flex sm4 offset-sm0 v-for="index in 6" :key="index">
      <v-card>
        <v-card-media
          class="white--text"
          height="140px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-container fill-height fluid class="table">
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
          <v-card-text align="left">
          <div>
            <span class="black--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
          </v-card-text>
        <v-card-actions >
          <v-btn flat color="black" dark>Share</v-btn>
          <v-btn flat color="orange">Baca Selengkapnya</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

  <app-footer></app-footer>

</div>
         
</template>

<style>
  .content_Home {
    margin-bottom: 186px;
  }
</style>
