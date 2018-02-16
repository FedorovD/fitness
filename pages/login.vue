<template>
  <div class="login-wrapper">
    <div class="columns is-centered">
		  <div class="column is-4">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email"  v-model="loginData.email">
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password"  v-model="loginData.password">
          </div>
        </div>
        <div class="control">
          <button class="button is-link" @click="onLogin">Submit</button>
        </div>
		</div>
	</div>
  <div class="columns is-centered">
    <div class="column is-4">
      <pre>{{response}}</pre>
    </div>
  </div>
  </div>

</template>
<script>
import axios from '~/plugins/axios'

export default {
  name: 'login',
  head () {
    return {
      title: `Please, login`
    }
  },
  data () {
    return {
      loginData: {
        email: '',
        password: ''
      },
      response: ''
    }
  },
  methods: {
    onLogin: function () {
      axios.post('/api/login', this.loginData).then(res => {
        console.log(res.data)
        this.response = res.data
        // this.$router.push('/')
      })
    }
  }
}
</script>

<style scoped>
.login-wrapper {
	padding: 80px 20px;
}
</style>
