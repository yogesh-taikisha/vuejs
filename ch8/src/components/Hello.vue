<!-- Attribute Binding -->
<script setup>
    const msg = "Hello World";
    const mydataid = "jack";
    const url = "https://vuejs.org/"

    // Dynamic Binding Multiple Object Attribute 

    const ObjOfAttrs = {
        id: 'jack',
        href: "https://vuejs.org/"
    }

    // Dyanmic argument
    const attributeName = 'href';

    // Boolean Attributes
    const isDisabled = "true";
    // const isDisabled = "false";
</script>

<template>
    <h1>{{ msg }}</h1>
    <h1>{{ mydataid }}</h1>
    <h1 id = "{{ mydataid }}">Hello 1 </h1>
    <h1 id = "jack"> Hello </h1>
    <h1 v-bind:id = " mydataid ">Hello 2 </h1>
    <h1 :id = " mydataid ">Hello 3 </h1>
    <a href = "https://vuejs.org/">Vue JS Website</a> <br/>
    <a v-bind:href= " url ">WEBSITE OF VUE JS  </a> <br/>
    <a :href= " url "> VUE JS Website  </a> <br/>
    <a :id="mydataid" :href="url"> Visit the Website</a> <br/>

    <!-- Dynamic Binding Multiple Object Attribute -->
    <a v-bind="ObjOfAttrs"> Visit 4</a> <br/>

    <!-- Dynamic Argument -->
    <a v-bind:[attributeName]="url">Visit 5</a> <br/>
    <a :[attributeName]="url">Visit 6</a> <br/>

    <!-- Boolean Attribute -->
     <button>Click</button> <br/>
     <button disabled>Click 1</button> <br/>
     <button :disabled="isDisabled">Click 2</button>

</template>

<style scoped>

</style>