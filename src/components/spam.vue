<template>
    <div>
      <h1>
        spam {{this.numberStore}}
      </h1>
      <h2>
          hello {{this.userCurrent}}
      </h2>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

  export default{
    computed:{
        ...mapGetters(['numberStore','userCurrent'])
    }
    ,
    data() {
      return {
        
      }
    },
    
    methods: {
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Jobdone{
    color: red;
  }
</style>
