<script setup>
import { reactive } from 'vue';
    // // without reactivity
    // let num = { a: 10, b:20 };
    // setTimeout(() => {
    //     console.log("settimeout called");
    //     console.log("Num", num);
    //     num.a = 30;
    //     console.log("a:", num.a);
    // }, 2000);

    // with reactivity
    // let num = reactive({ a: 10, b:20 });
    // setTimeout(() => {
    //     console.log("settimeout called");
    //     console.log("Num", num);
    //     num.a = 30;
    //     console.log("a:", num.a);
    // }, 2000);

    // without reactivity
    // let count = 0;
    // setTimeout(() => {
    //     console.log("settimeout called");
    //     count++;
    //     console.log("count", count);
    // }, 2000);

    // with reactivity
    let num = reactive({count: 0});
    setTimeout(() => {
        console.log("settimeout called");
        console.log("Num", num)
        num.count++;
        console.log("Count", num.count);
    }, 2000);
</script>
 
<template>
    <!-- without reactivity and with reactivity -->
    <!-- <h1>SUM: {{ num.a + num.b }}</h1> -->

    <!-- without reactivity -->
    <!-- <h1>Count: {{ count }}</h1> -->

    <!-- with reactivity -->
    <h1>Count: {{ num.count }}</h1>
</template>

<style scoped></style>