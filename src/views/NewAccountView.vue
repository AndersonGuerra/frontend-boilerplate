<template>
  <div>
    <h1>Nova conta</h1>
    <v-row>
      <v-col cols="6">
        <v-text-field label="Nome"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field label="E-mail"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field label="Senha"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-btn color="primary">Cadastrar e entrar</v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn color="primary" :to="{ name: 'Menu' }">Voltar para o menu</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewAccountView",
});
</script>
