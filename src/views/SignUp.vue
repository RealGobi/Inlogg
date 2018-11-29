<template>
  <div class="sign-up">
    <h3>Sign Up</h3>
    <p>Create a new account.</p>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <button @click="signUp">Sign Up</button>
    <span>Go back to <router-link to="/login">Log In</router-link></span>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'signUp',
 data(){
   return {
     email:'',
     password: ''
   };
 },
 methods:{
   signUp: function () {
     firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
         this.$router.replace('home')
       },
        (err)=> {
         alert('Oops. ' + err.message)
       }
     )
     
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signup{
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 7.5px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}

</style>
