<script setup>
    const msg = "Learn Vue JS";
    const num = 10;
    // const on = true;
    const on = false;
    function disp() {
        console.log("Hello from disp");
    }
</script>

<template>
    <h1>Hello World</h1>
    <h1>{{ msg }}</h1>
    <h2>{{ 10 + 10 }}</h2>
    <h2>{{ num + 20 }}</h2>
    {{ disp() }}
    {{ on ? "Dark" : "Light" }}
</template>

<style scoped>

</style>