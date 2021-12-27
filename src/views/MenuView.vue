<template>
  <div>
    <v-row>
      <v-col>
        <v-btn block color="primary" :to="{ name: 'Login' }">Login</v-btn>
      </v-col>
      <v-col>
        <v-btn block color="primary">Posts</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuView",

  components: {},
});
</script>
