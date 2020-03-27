<template>
  <div>
        <button v-on:click='decrement()'>-</button>
        <label>&nbsp;{{counter}}&nbsp;</label>
        <button v-on:click='increment()'>+</button>
  </div>
</template>


<script>
export default {  
  data(){
    return{
         counter:0
        }
  },
  
  methods:{
      decrement(){
          if(this.counter>0)
            return this.counter--;
          else
            return this.counter;
      },
      increment(){
            if(this.counter<10)
                return this.counter++;
            else
                alert('You cannot buy more than 10 items')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background:rgb(122, 63, 100);
    padding:10px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
}
button{
    background-color:rgb(139, 158, 190);
    font-size:25px;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    display:inline-block;
    padding:10px 30px;
}
img{
  width:100px;
  height:100px;
}
label{
    width:100px;
    font-size: 30px;
}
</style>