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
    <v-row>
      <v-col cols="1">
        <v-btn color="primary">Entrar</v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn color="primary" :to="{ name: 'Menu' }">Voltar para o menu</v-btn>
      </v-col>
    </v-row>
    <p>
      Não tem conta? Clique
      <router-link :to="{ name: 'Novo usuário' }">aqui</router-link>
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
});
</script>
