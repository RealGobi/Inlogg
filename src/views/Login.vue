<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password"  v-model="password" placeholder="password"><br>
    <button @click="log">Log In</button>
    <p><router-link to="/sign-up">Sign up?</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'login',
 data(){
   return {
     email:'',
     password: ''
   };
 },
 methods:{
   log: function(){
     firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) =>{
         this.$router.replace('home')
       },
       (err) =>{
         alert('Oops. ' + err.message)
       }
     );
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
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
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
