import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    email: '',
    password: ''
  },
  getters: {
    username:state => state.username,
    email:state => state.email,
    password:state => state.password
  },
  mutations: {
    updateUsername(state, newUsername) {
      state.username = newUsername;
    },
    updateEmail(state, newEmail) {
      state.email = newEmail;
    },
    updatePassword(state, newPassword) {
      state.password = newPassword
    },
  },
  actions: {
    registerUser(context) {
      firebase.auth().createUserWithEmailAndPassword(context.state.email, context.state.password)
      .then(result => { 
        const user = result.user
        if(user) {
          const userId = user.uid;
          const userInitialData = {
            userId: userId,
            email: context.state.email,
            username: context.state.username,
            password: context.state.password,
          }
          firebase.firestore().collection('users').doc(userId).set(userInitialData)
          .then(function() {
            context.commit('updateUsername', '');
            context.commit('updateEmail', '');
            context.commit('updatePassword', '');
          })
          .catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode)
            alert(errorMessage)
          });
        }
      })
      .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode)
      alert(errorMessage)
      });
    },
    updateUsername({ commit }, newUsername) {
      commit('updateUsername', newUsername)
    },
    updateEmail({ commit }, newEmail) {
      commit('updateEmail', newEmail)
    },
    updatePassword({ commit }, newPupdatePassword) {
      commit('updatePassword', newPupdatePassword)
    },
  }
})