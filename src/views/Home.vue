<template>
  <div class="home">
    <div class="form">
      <div class="title">
        <h1>TICKET</h1>
      </div>
      <div class="button">
        <button @click="getTicket">
          GET
        </button>
      </div>
      <div class="link" @click="goToAbout">
      ดูจำนวนคงเหลือ
      </div>
      <div>
        จำนวนตั๋วที่ซื้อ: {{buynum}}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      iticket: 'iticket',
      buynum: 'buynum'
    })
  },
  methods: {
    ...mapActions({
      getTicketFromStore: 'getTicketFromStore',
      getBuyNum: 'getBuyNum'
    }),
    getTicket () {
      if(this.iticket > 0){
        let ticketLeft = this.iticket - 1
        let ticketnum = this.buynum + 1
        this.getTicketFromStore(ticketLeft)
        this.getBuyNum(ticketnum)
        alert('คุณได้รับตั๋วแล้ว')
      }else{
        alert('ตั๋วหมดแล้ว')
      }
    },
    goToAbout () {
      this.$router.push('/about')
    }
  }
}
</script>



<style>
 .home {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
 }

 .form {
   width: 450px;
   height: 300px;
   background-color: #ffffff;
   box-shadow: 1px 1px 25px 2px #888888;
   text-align: center;
 }

 .title {
   margin-top: 50px;
 }

 .button {
   margin-top: 80px;
 }

 button {
   outline: none;
   cursor: pointer;
   border: 1px solid black;
   border-radius: 5px;
   padding: 10px 40px;
 }

 .link {
   margin-top: 50px;
   margin-right: 10px;
   text-align: right;
   text-decoration: underline;
   cursor: pointer;
 }
</style>