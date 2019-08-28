<template>
    <div id="app">
        <h2 class="msgColor">{{msg}}</h2>
        <button @click="fn">点我</button>
    </div>
</template>

<script>
export default {
    name:'app',
    data() {
      return {
        msg:'Hello World'
      }
    },
    methods:{
      fn(){
        alert('123')
      }
    }
}
</script>

<style>
    .msgColor {
       color:red;
    }
</style>
