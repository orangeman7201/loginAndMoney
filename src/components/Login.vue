<template>
  <div style="padding-left: 500px">
  <h1 style="font-size: 40px">ユーザ登録</h1><br>
    <form @submit.prevent="registerUser">
      <table>
        <tr>
          <th><label for="Username">ユーザー名</label></th>
          <th><input id="Username" type="text" placeholder="Username" v-model="username"></th>
        </tr>
        <tr>
          <th><label for="email">メールアドレス</label></th>
          <th><input id="email" type="email" placeholder="e-mail" v-model="email"></th>
        </tr>
        <tr>
          <th><label for="password">パスワード</label></th>
          <th><input id="password" type="password" placeholder="Password" v-model="password"></th>
        </tr>
      </table><br>
        <button type="submit" style="text-align: center" class="button is-primary">登録</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

  export default {
    data: function() {
      return {
        username: '',
        email: '',
        password: ''
      }
    },
    methods: {
      registerUser(){
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(result => {
          const user = result.user
          if(user) {
            const userId = user.uid;
            const userInitialData = {
              userId: userId,
              email: this.email,
              username: this.username,
              password: this.password,
            }
            firebase.firestore().collection('users').doc(userId).set(userInitialData)
             .then(function() {
               console.log('ユーザーが作成されました!')
             })
             .catch(function() {
               console.log('残念..失敗...')
             })
          }
        })
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode)
        alert(errorMessage)
    });
      }
    },
  }
</script>
