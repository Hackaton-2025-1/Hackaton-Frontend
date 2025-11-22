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
  if (!props.userName) return ''
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
      <router-link to="/" class="link">      
        <div class="museum-left" @click="emit('logo-click')">
        <slot name="logo">
          <div class="museum-logo-wrap">
            <img v-if="logoSrc" :src="logoSrc" alt="Logo" class="museum-logo" />
            <div v-else class="museum-logo-placeholder">LOGO</div>
          </div>
        </slot>

        <div class="museum-brand">
          <div class="museum-title">Museu Sambaqui</div>
          <div class="museum-sub">Coleção Digital</div>
        </div>
      </div></router-link>



      <nav class="museum-nav" aria-label="main navigation">
        <div class="search-wrap">
          <i class="fas fa-search search-icon"></i>
          <input
            type="text"
            class="search-input"
            placeholder="Buscar no acervo..."
          />
        </div>
      </nav>

      <div class="museum-right">
        <div class="museum-user">
          <div class="museum-user-info">
           <router-link to="/login" class="link">
              <div class="museum-user-name">{{ userName || 'Visitante' }}</div>
          </router-link>
            <router-link to="/gerenciamento" class="link"> <div class="museum-user-role small-muted">visualizar ou so editor</div>
              </router-link>

          </div>

          <img
            v-if="userSrc"
            :src="userSrc"
            :alt="userName || 'User avatar'"
            class="museum-avatar"
            :style="{ width: avatarSize + 'px', height: avatarSize + 'px' }"
          />

          <div
            v-else
            class="museum-avatar museum-avatar-initials"
            :style="{
              width: avatarSize + 'px',
              height: avatarSize + 'px',
              lineHeight: avatarSize + 'px',
            }"
          >
            {{ initials || '?' }}
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
  left: 0;
  width: 100%;
  background: linear-gradient(180deg, #f7f3ec 0%, #fbfaf8 100%);
  border-bottom: 1px solid rgba(31, 41, 55, 0.06);
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.museum-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 24px;
}


.museum-left {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
}
.museum-logo-wrap {
  background: white;
  padding: 6px;
  border-radius: 6px;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
}
.museum-logo {
  height: 56px;
  width: auto;
  display: block;
  border-radius: 4px;
}
.museum-logo-placeholder {
  font-weight: 700;
  color: #222;
  padding: 8px 12px;
  border-radius: 6px;
  background: #efe7d8;
}

.museum-brand {
  line-height: 1;
}
.museum-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 20px;
  color: #1f2937;
  font-weight: 700;
}
.museum-sub {
  font-family: Inter, system-ui, sans-serif;
  font-size: 12px;
  color: #6b6b6b;
  margin-top: 2px;
}


.museum-nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.search-wrap {
  position: relative;
  max-width: 280px;
  width: 100%;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 14px;
  color: #6b6b6b;
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 8px 12px 8px 32px;
  font-family: Inter, system-ui, sans-serif;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: #ffffff;
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: #c49a3f;
  box-shadow: 0 0 0 2px rgba(196, 154, 63, 0.15);
}


.museum-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.museum-user {
  display: flex;
  align-items: center;
  gap: 12px;
}
.museum-user-info {
  text-align: right;
}
.museum-user-name {
  font-family: Inter, system-ui, sans-serif;
  font-weight: 600;
  color: #1f2937;
}
.museum-user-role {
  font-size: 12px;
  color: #6b6b6b;
}
.museum-avatar {
  border-radius: 999px;
  object-fit: cover;
  display: block;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
  border: 2px solid rgba(196, 154, 63, 0.12);
}
.museum-avatar-initials {
  background: #c49a3f;
  color: white;
  font-weight: 700;
  text-align: center;
}


@media (max-width: 900px) {
  .museum-nav {
    justify-content: flex-start;
  }
  .museum-inner {
    padding: 12px 16px;
  }
  .museum-logo {
    height: 48px;
  }
}

@media (max-width: 640px) {
  .museum-inner {
    gap: 12px;
  }
  .museum-nav,
  .search-wrap {
    display: none;
  }
  .museum-title {
    font-size: 18px;
  }
  .museum-user-info {
    display: none;
  }
}

.link {
  text-decoration: none;
  list-style: none;
}
</style>
