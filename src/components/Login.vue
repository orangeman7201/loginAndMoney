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
  export default {
    computed: {
      username: {
        get() {
          return this.$store.getters.username;
        },
        set(value) {
          this.$store.dispatch("updateUsername", value);
        }
      },
      email: {
        get() {
          return this.$store.getters.email;
        },
        set(value) {
          this.$store.dispatch('updateEmail', value)
        }
      },
      password: {
        get() {
          return this.$store.getters.password;
        },
        set(value) {
          this.$store.dispatch('updatePassword', value)
        }
      },
    },
    methods: {
      registerUser() {
        this.$store.dispatch('registerUser')
      }
        
    },
  }
</script>
