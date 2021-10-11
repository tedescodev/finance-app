<template>
  <div class="h-full overflow-hidden">
    <div class="flex justify-end p-4">
      <ColorSwitch />
    </div>
    <h1 class="text-center text-3xl font-bold">Finance App</h1>

    <div
      class="
        login-body
        mt-12
        pt-6
        h-full
        flex flex-col
        items-center
        bg-light
        dark:bg-blue-main-800
      "
    >
      <div
        class="
          p-6
          grid grid-cols-1
          sm:grid-cols-1
          md:grid-cols-1
          lg:grid-cols-1
          xl:grid-cols-3
        "
      >
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            username
          </label>
          <input
            v-model="username"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            type="text"
            placeholder="username"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            password
          </label>
          <input
            v-model="password"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            type="text"
            placeholder="password"
          />
        </div>
        <SocialLoginButton
          type="api"
          text="Iniciar sesión"
          class="m-2"
          @click="loginWithApi"
        />
      </div>
      <div
        class="
          p-2
          grid grid-cols-1
          sm:grid-cols-1
          md:grid-cols-1
          lg:grid-cols-1
          xl:grid-cols-3
        "
      >
        <SocialLoginButton
          type="google"
          text="Iniciar con google"
          class="m-2"
          @click="loginWithGoogle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import SocialLoginButton from '~/components/auth/SocialLoginButton.vue'
import ColorSwitch from '~/components/ui/ColorSwitch.vue'

export default {
  name: 'Login',
  layout: 'auth',
  components: {
    ColorSwitch,
    SocialLoginButton,
  },
  data: () => ({
    username: '',
    password: '',
  }),
  methods: {
    async loginWithApi() {
      try {
        const response = await this.$axios.$post('auth/signin', {
          username: this.username,
          password: this.password,
        })
        localStorage.setItem('authToken', response.token)
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
    async loginWithGoogle() {
      try {
        const provider = new firebase.auth.GoogleAuthProvider()
        const result = await this.$fire.auth.signInWithPopup(provider)
        localStorage.setItem('authToken', result.credential.accessToken)
        this.$router.push('/')
      } catch (error) {
        // TODO: show toast
        console.error('login error', error)
      }
    },
  },
}
</script>

<style scoped>
.login-body {
  width: 200%;
  margin-left: -50%;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
}
</style>
