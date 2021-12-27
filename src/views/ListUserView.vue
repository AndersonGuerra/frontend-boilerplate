<template>
  <div>
    <h1>Usuários</h1>
    <ul>
      <li v-for="(user, index) in users" :key="index">{{ user.name }}</li>
    </ul>
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
      const usersResult = await (await api.get("/users")).data;
      console.log(usersResult);
      users.value.push(...usersResult);
      console.log("hum");
    });
    return { users };
  },
});
</script>
