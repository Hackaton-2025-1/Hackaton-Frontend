<script setup>
import { computed } from 'vue'
import logo from '@/assets/imagens/logo.png'

const props = defineProps({
  logoSrc: { type: String, default: logo },
  userSrc: { type: String, default: '' },
  userName: { type: String, default: '' },
  avatarSize: { type: Number, default: 40 },
})

const emit = defineEmits(['logo-click'])

const initials = computed(() => {
  if (!props.userName) return '?'
  return props.userName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
})
</script>

<template>
  <header class="museum-header">
    <div class="museum-inner">

      <!-- LOGO + BRAND -->
      <div class="museum-left" @click="emit('logo-click')">
        <router-link to="/" class="logo-link">
          <div class="museum-logo-wrap">
            <img v-if="logoSrc" :src="logoSrc" alt="Logo" class="museum-logo" />
            <div v-else class="museum-logo-placeholder">LOGO</div>
          </div>

          <div class="museum-brand">
            <div class="museum-title">Museu Sambaqui</div>
            <div class="museum-sub">Coleção Digital</div>
          </div>
        </router-link>
      </div>

      <!-- NAV CENTRO -->
      <nav class="museum-nav">
        <router-link to="/collection" class="nav-item">
          COLEÇÕES
        </router-link>
      </nav>

      <!-- USER AREA -->
      <div class="museum-right">
        <div class="museum-user">

          <div class="museum-user-info">
            <router-link to="/login" class="user-link">
              <div class="museum-user-name">{{ userName || 'Visitante' }}</div>
            </router-link>

            <router-link to="/gerenciamento" class="user-link">
              <div class="museum-user-role">visualizar ou ser editor</div>
            </router-link>
          </div>

          <!-- AVATAR -->
          <img
            v-if="userSrc"
            :src="userSrc"
            class="museum-avatar"
            :style="{ width: avatarSize + 'px', height: avatarSize + 'px' }"
            @click="$router.push('/controle')"
          />

          <div
            v-else
            class="museum-avatar museum-avatar-initials"
            :style="{ width: avatarSize + 'px', height: avatarSize + 'px' }"
            @click="$router.push('/controle')"
          >
            {{ initials }}
          </div>
        </div>
      </div>

    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;600&display=swap');

.museum-header {
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(180deg, #f7f3ec 0%, #fbfaf8 100%);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  z-index: 999;
  box-shadow: 0 3px 8px rgba(0,0,0,0.15);
}

.museum-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* LEFT */
.logo-link {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
}

.museum-logo-wrap {
  background: white;
  padding: 6px;
  border-radius: 6px;
  box-shadow: 0 3px 12px rgba(0,0,0,0.1);
}

.museum-logo {
  height: 56px;
}

.museum-title {
  font-family: 'Playfair Display';
  font-size: 20px;
  font-weight: 700;
  color: #111;
}
.museum-sub {
  font-family: Inter, sans-serif;
  font-size: 12px;
  color: #666;
}

/* NAV CENTRO */
.museum-nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-item {
  text-decoration: none;
  color: #333;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 16px;
  margin-right: 100px;
}

/* RIGHT */
.museum-right {
  display: flex;
  align-items: center;
}

.museum-user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.museum-user-info {
  text-align: right;
}
.user-link {
  text-decoration: none;
  color: inherit;
}
.museum-user-name {
  font-family: Inter;
  font-weight: 600;
}
.museum-user-role {
  font-size: 12px;
  color: #666;
}

.museum-avatar {
  border-radius: 999px;
  object-fit: cover;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.museum-avatar-initials {
  background: #c49a3f;
  color: white;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* RESPONSIVO */
@media (max-width: 640px) {
  .museum-nav { display: none; }
  .museum-user-info { display: none; }
  .museum-title { font-size: 18px; }
}
</style>
