<template>
  <div>
    <h1>This is homepage</h1>
    <button class="bg-blue-500" @click="signout">Sign out</button>
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store';
import router from "@/routes/indexRoute";

  function signout(){
    useAuthStore().logout;
    router.push('/login');
  }
</script>