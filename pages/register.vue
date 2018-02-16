<template>
  <div class="register-wrapper">
    <div class="columns is-centered">
		  <div class="column is-4">
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input class="input" type="text"  v-model="registerData.username">
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email"  v-model="registerData.email">
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password"  v-model="registerData.password">
          </div>
        </div>
        <div class="control">
          <button class="button is-link" @click="onRegister">Submit</button>
        </div>
		</div>
	</div>
  </div>

</template>
<script>
import axios from "~/plugins/axios";

export default {
  name: "register",
  head() {
    return {
      title: `Register`
    };
  },
  data() {
    return {
      registerData: {
        email: "",
        username: "",
        password: ""
      },
      response: ""
    };
  },
  methods: {
    onRegister: function() {
      axios.post("/api/register", this.registerData).then(res => {
        console.log(res.data);
        this.response = res.data;
        // this.$router.push('/')
      });
    }
  }
};
</script>

<style scoped>
.register-wrapper {
  padding: 80px 20px;
}
</style>