<template>
  <div class="home">
    <div class="form">
      <div class="title">
        <h1>BUY TICKET</h1>
        <br>
        FristClass (300฿) :  <input type="number" v-model="fristT" min="1" max="99">  <br>
        Economic (200฿)   :  <input type="number" v-model="eco" min="1" max="99"> 
          <div class="button">
        
        <button @click="getTicket(fristT,eco)">
          GET
        </button>
      </div>
      <div class="link" @click="goToAbout">
           
          </div>
      </div>
      <div class="home">
            <br>
          <div class="tt" v-if="bill">
              <br>
              <div class="gg">
                <h1>BILL TICKET</h1>
                  จำนวน FristClass : {{fristT}} ใบ <br> 
                  จำนวน Economic   : {{eco}}    ใบ <br> 
                  รวม : {{Number(fristT)+Number(eco)}} ใบ | {{(fristT*300)+(eco*200)}} บาท<br>
                <div class="button">
                  <button v-on:click="bill = false">เสร็จ</button>
                </div>
              </div>
          </div>

        </div> 
    </div>
          
  </div>
  
</template>

<script>
// @ is an alias to /src
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Home',
  data(){
    return{
      fristT:'',
      eco:'',
      bill:false
    }
  },
  computed: {
    ...mapGetters({
      ticket: 'ticket'
    })
  },
  methods: {
    ...mapActions({
      getTicketFromStore: 'getTicketFromStore'
    }),
    getTicket(test,eco){
      var str = 'Erroe : กรุณาใส่จำนวนตั๋ว !!!'
      let ticketLeft = this.ticket
      if(test>0 || eco>0){
        var sumT = Number(test) + Number(eco)
        ticketLeft = this.ticket - sumT 
        console.log(sumT)
        if(ticketLeft>=0){
        this.getTicketFromStore(ticketLeft)
          if(test!=0){
            var aa = 'คุณได้รับตั๋วแล้ว FristClass' +" "+ test + " ใบ "
            alert(aa)
          }
          if(eco!=0){
            var bb = 'คุณได้รับตั๋วแล้ว Economic' +" "+ eco + " ใบ "
            alert(bb)
          }

        this.bill = true
        }else{
          alert('Error : ตั๋วหมด !!!' + "จำนวนตั๋วที่เหลือ " +this.ticket)
        }
      }else if (test == 0){
        alert(str)
      }else if (eco == 0){
       
        alert(str)
      }
     
    },
    goToAbout(){
      this.$router.push('/about')
    }
  }
}

</script>

<style>
  .home{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .form{
    width: 400px;
    height: 300px;
    background-color: aliceblue;
    box-shadow: 1px 1px 25px 2px #888888;
    text-align: center;
  }
  .title{
    margin-top: 50px;
    
  }
  .tt{
    width: 400px;
    height: 300px;
    background-color: aliceblue;
    box-shadow: 1px 1px 25px 2px #888888;
    text-align: center;
  }
  .gg{
    margin-top: 10%;
  }
  .button{
    margin-top: 10%;
  }
  button{
    outline: none;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 5%;
    padding: 10px 40%;
  }
  .link{
    margin-top: 30%;
    margin-right: 10%;
    text-align: right;
    text-decoration: underline;
    cursor: pointer;
  }input[type=Number]:focus {
  background-color: lightblue;
}
</style>
