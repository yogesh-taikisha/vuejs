<script setup>
  import { ref } from 'vue'
  
  const girlImage = ref("https://cdn.pixabay.com/photo/2022/09/16/08/48/girl-7458180_960_720.jpg");
</script>

<template>
  <!-- using images -->
  <img src="./assets/profilePhoto.jpeg" alt="profile photo" />

  <!-- using network image -->
  <img src="https://cdn.pixabay.com/photo/2022/06/15/13/39/man-7263965_960_720.png" alt="bhuvan" />

  <!-- using state image -->
  <!-- <img v-bind:src="girlImage" /> -->
  <img :src="girlImage" />
    <!-- for getting the images reactively and dynamically we need to find it to v-bind directive otherwise it will be taken as a string -->
</template>

<style scoped>

</style>
