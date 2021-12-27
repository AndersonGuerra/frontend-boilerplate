<template>
  <div>
    <h1>Usuários</h1>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        <router-link
          :to="{
            name: 'Detalhes do usuário',
            params: {
              id: user.id,
            },
          }"
          >{{ user.name }}</router-link
        >
      </li>
    </ul>
    <v-col cols="3">
      <v-btn color="primary" :to="{ name: 'Menu' }">Voltar para o menu</v-btn>
    </v-col>
  </div>
</template>
<script lang="ts">
import api from "@/api";
import User from "@/models/User";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "ListUserView",
  setup() {
    const users = ref(Array<User>());
    onMounted(async () => {
      const usersResult = (await api.get("/users")).data;
      users.value.push(...usersResult);
    });
    return { users };
  },
});
</script>
