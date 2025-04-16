<script setup>
  const msg = 'Hello World!'
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <ByeWorld/>
      <!-- this also working without the import because it is globally registered  -->
  </div>
</template>

<style scoped></style>