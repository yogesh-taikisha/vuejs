<!-- Bindging Inline Style -->
<template>
 <h1 style="color: black; background-color: beige;"> Hello World</h1>
 <h1 v-bind:style="{color: 'black', backgroundColor: 'beige'}"> Hello World</h1>
    <!-- if the colors are not written in quotes then those are treated as variables that needs to be defined on instance -->
    <!-- the background color is written in camelcase unlike css way of writing it -->
 <h1 v-bind:style="{color: 'black', 'background-color': 'yellow'}"> Hello World</h1>

</template>

<script setup>

</script>