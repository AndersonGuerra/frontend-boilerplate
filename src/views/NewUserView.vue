<template>
  <div>
    <h1>Nova conta</h1>
    <v-row>
      <v-col cols="6">
        <v-text-field label="Nome" v-model="form.name"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field label="E-mail" v-model="form.email"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field
          label="Senha"
          type="password"
          v-model="form.password"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-btn color="primary" @click="createUser">Cadastrar e entrar</v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn color="primary" :to="{ name: 'Menu' }">Voltar para o menu</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import api from "@/api";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "NewUserView",
  setup() {
    const form = ref({ name: "", email: "", password: "" });
    const createUser = async () => {
      const result = await api.post("/users", {
        ...form.value,
      });
      if (result.status === 200) {
        const auth = await api.post("/auth", {
          ...form.value,
        });
        console.log(auth)
      }
    };
    return { form, createUser };
  },
});
</script>
