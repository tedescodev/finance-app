<template>
  <div>
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'SocialLoginButton',
  data: () => ({
    text: 'My Profile',
  }),
}
</script>

<style scoped>
.google {
  @apply bg-red-main-600 border-red-main-600 text-white;
}
.facebook {
  @apply bg-blue-main-700 border-blue-main-700 text-white;
}
</style>
