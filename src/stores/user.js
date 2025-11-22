import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    email: '',
    role: '',
    avatar: '',
  }),
  actions: {
    setUser(user) {
      this.name = user.name
      this.email = user.email
      this.role = user.role
      this.avatar = user.avatar
    },
    updateAvatar(avatar) {
      this.avatar = avatar
    },
    clearUser() {
      this.name = ''
      this.email = ''
      this.role = ''
      this.avatar = ''
    }
  },
  persist: {
    key: 'usuario',
    paths: ['name', 'email', 'role', 'avatar'],
    storage: localStorage
  }
})
