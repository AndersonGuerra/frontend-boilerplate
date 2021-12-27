<template>
  <div>
    <h1>Login</h1>
    <v-row>
      <v-col cols="6">
        <v-text-field label="E-mail"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field label="Senha" type="password"></v-text-field>
      </v-col>
    </v-row>
    <v-btn color="primary">Entrar</v-btn>
    <p>Não tem conta? Clique <a href="#">aqui</a></p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
});
</script>
