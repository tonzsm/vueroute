<template>
  <div class="about">
    <div class="form">
      <div class="title">
        <h1>จำนวนคงเหลือ</h1>
      </div>
      <div class="ticket">
        <h1>{{ticket}} ใบ</h1>
      </div>
    <div
    class="link"
    @click="goToHome">
    ย้อนกลับ
    </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'About',
  computed:{
    ...mapGetters({
      ticket: 'ticket'
    })
  },
  methods: {
    goToHome(){
      this.$router.push('/')
    }
  }
}
</script>>
<style>
  .about {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .form{
    width: 450px;
    height: 300px;
    background-color: aliceblue;
    box-shadow: 1px 1px 25px 2px #888888;
    text-align: center;
  }.title{
    margin-top: 50px;
    
  }.ticket {
    margin-top: 60px;
  }
  .link {
    margin-top: 50px;
    margin-right: 10px;
    text-align: right;
    text-decoration: underline;
    cursor: pointer;
  }
</style>