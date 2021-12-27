<template>
  <div>
    <h1>Detalhes do usuário</h1>
    <p>Nome: {{ user.name }}</p>
    <p>E-mail: {{ user.email }}</p>
    <v-row>
      <v-col>
        <v-btn color="primary" :to="{ name: 'Usuários' }">
          Voltar para o lista de usuários
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import api from "@/api";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "DetailUserView",
  setup() {
    const route = useRoute();
    const { id } = route.params;
    const user = ref({});
    onMounted(async () => {
      const userResult = (await api.get(`users/${id}`)).data;
      user.value = userResult;
    });
    return { user };
  },
});
</script>
