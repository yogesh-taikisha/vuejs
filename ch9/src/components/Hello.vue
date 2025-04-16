<script setup>
import { reactive } from 'vue';
    // without reactivity with js
    // let num = { a: 10, b:20 };
    // setTimeout(() => {
    //     console.log("settimeout called");
    //     console.log("Num", num);
    //     num.a = 30;
    //     console.log("a:", num.a);
    // }, 2000);

    // reactivity with vuejs
    // let num = reactive({ a: 10, b:20 });
    // setTimeout(() => {
    //     console.log("set timeout called");
    //     console.log("Num", num);
    //     num.a = 30;
    //     console.log("a:", num.a);
    // }, 2000);

    // without reactivity with js
    // let count = 0;
    // setTimeout(() => {
    //     console.log("set timeout called");
    //     count++;
    //     console.log("count", count);
    // }, 2000);

    // with reactivity in vuejs
    // we can't make variables using reactive function we only use it with objects and arrays
        //  so we need to make objects using reactive function
            // let num = reactive({count: 0});
            // setTimeout(() => {
            //     console.log("settimeout called");
            //     console.log("Num", num) //to check if num is num 
            //     num.count++;
            //     console.log("Count", num.count);
            // }, 2000);

    // deep reactivity
        const obj = reactive({
            num: { count: 0 },
            user: ["Rahul", "Sonam"],
        });
        setTimeout(() => {
            console.log("set timeout called");
            console.log("OBJ", obj);
            console.log("obj.num", obj.num)
            // console.log("obj.num.count", obj.num.count);
            console.log("obj.user", obj.user);
        }, 2000);
</script>
 
<template>
    <!-- without reactivity with js and with reactivity with vue js-->
    <!-- <h1>SUM: {{ num.a + num.b }}</h1> -->

    <!-- reactivity with js  -->
    <!-- <h1>Count: {{ count }}</h1> -->

    <!-- with reactivity -->
    <!-- <h1>Count: {{ num.count }}</h1> -->

    <!-- how to access with deep reactivity -->
     <h1>Count: {{ obj.num.count }}</h1>
     <h1>User: {{ obj.user }}</h1>
     <!-- <h1>User1: {{ obj.user[0] }}</h1>
     <h1>User2: {{ obj.user[1] }}</h1> -->
</template>

<style scoped></style>