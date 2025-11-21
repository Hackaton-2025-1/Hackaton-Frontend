<script setup>
</script>

<template>
   <footer class="museum-footer">
      <div class="museum-footer-inner">
         <div class="museum-columns">
            <div class="museum-col">
               <h4>História</h4>
               <p class="muted small">Museu Sambaqui</p>
               <p class="muted small">Fundado em 1920, o Museu Sambaqui preserva coleções arqueológicas e naturais da região, com exposições permanentes e temporárias.</p>
            </div>

            <div class="museum-col">
               <h4>Recursos</h4>
               <ul>
                  <li><a href="#">Política de Privacidade</a></li>
                  <li><a href="#">Termos e Condições</a></li>
                  <li><a href="#">Blogue</a></li>
                  <li><a href="#">Contate-nos</a></li>
               </ul>
            </div>

            <div class="museum-col">
               <h4>Acervos</h4>
               <ul>
                  <li><a href="#">Animal</a></li>
                  <li><a href="#">Vegetal</a></li>
                  <li><a href="#">Mineral</a></li>
                  <li><a href="#">Outros (Sintéticos)</a></li>
               </ul>
            </div>

            <div class="museum-col museum-contact">
               <h4>Museu do Sambaqui</h4>
               <p class="muted small">Dúvidas entre em contato:</p>

               <form class="contact-form" @submit.prevent>
                  <label class="sr-only" for="footer-email">Email</label>
                  <input id="footer-email" type="email" placeholder="Email" />
                  <button class="btn">Enviar</button>
               </form>

               <div class="socials">
                  <a aria-label="facebook" href="#" class="social" title="Facebook">
                     <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5 3.66 9.13 8.45 9.95v-7.05h-2.54v-2.9h2.54V9.41c0-2.51 1.5-3.89 3.79-3.89 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.25 0-1.64.78-1.64 1.58v1.9h2.8l-.45 2.9h-2.35V22c4.79-.82 8.45-4.95 8.45-9.93z"/></svg>
                  </a>
                  <a aria-label="twitter" href="#" class="social" title="Twitter">
                     <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M22 5.92c-.63.28-1.3.48-2 .56.72-.44 1.27-1.13 1.53-1.95-.68.4-1.43.7-2.23.86C18.94 4.6 18 4 17 4c-1.76 0-3.18 1.42-3.18 3.18 0 .25.03.5.08.74C10.3 8.84 7.1 7.1 4.86 4.4c-.28.48-.44 1.03-.44 1.62 0 1.12.57 2.11 1.45 2.69-.53-.02-1.03-.16-1.47-.4v.04c0 1.56 1.11 2.86 2.58 3.16-.27.07-.55.11-.84.11-.2 0-.4-.02-.6-.06.4 1.25 1.57 2.16 2.96 2.19C6.3 18.1 4.3 18.77 2 18.48c1.62 1.04 3.55 1.64 5.62 1.64 6.75 0 10.45-5.59 10.45-10.44v-.48c.72-.52 1.33-1.16 1.82-1.9-.66.29-1.37.5-2.1.6z"/></svg>
                  </a>
                  <a aria-label="instagram" href="#" class="social" title="Instagram">
                     <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 6.9A4.1 4.1 0 1 1 7.9 13 4.11 4.11 0 0 1 12 8.9zm5.5-2.4a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1zM12 10.8A1.2 1.2 0 1 0 13.2 9.6 1.2 1.2 0 0 0 12 10.8z"/></svg>
                  </a>
               </div>
            </div>
         </div>

         <div class="museum-copyright">
            <small>Todos os direitos Reservados / Copyright ©2025</small>
         </div>
      </div>
   </footer>
</template>

<style scoped>
.museum-footer{
   background: #352a2a; 
   color: #efe8df;
   padding: 36px 0 18px 0;
}

.museum-footer-inner {
    max-width:1200px;
    margin:0 auto;
    padding:0 20px }

    .museum-columns { 
    display:flex;
    gap:32px; 
    align-items:flex-start; 
    justify-content:space-between; 
    flex-wrap:wrap }

.museum-col { flex:1 1 220px; min-width:180px }
.museum-col h4{ color:#fff3e8; margin:0 0 10px 0; font-size:16px }
.museum-col p.small, .museum-col p.muted, .museum-col .muted{ color:rgba(255,244,233,0.8); font-size:13px; line-height:1.5 }
.museum-col ul{ list-style:none; padding:0; margin:0 }
.museum-col li{ margin:8px 0 }
.museum-col a{ color:rgba(255,244,233,0.86); text-decoration:none; font-size:14px }
.museum-col a:hover{ color:#f7e6c8 }

.museum-contact{ max-width:340px }
.contact-form{ display:flex; gap:8px; margin-top:8px }

.contact-form input{
    padding:10px 12px; 
    border-radius:6px; 
    border:1px solid rgba(255,255,255,0.08); 
    background: rgba(255,255,255,0.04); 
    color:inherit 
}


.contact-form input::placeholder{ color: rgba(255,244,233,0.6) }
.btn{ background:#efe8df; color:#352a2a; border:none; padding:10px 14px; border-radius:8px; cursor:pointer; font-weight:700 }
.btn:hover{ filter:brightness(.95) }

.socials{ margin-top:14px; display:flex; gap:10px }

.social { 
    display:inline-flex; 
    width:36px; height:36px; 
    align-items:center; 
    justify-content:center; 
    border-radius:8px; color: #efe8df; background: rgba(255,255,255,0.03) }

.social:hover{ background: rgba(255,255,255,0.06); color:#f7e6c8 }

.museum-copyright{ 
    text-align:center; 
    margin-top:22px; 
    color:rgba(255,244,233,0.7); 
    border-top:1px dashed rgba(255,255,255,0.04); 
    padding-top:16px }


@media (max-width: 900px){
   .museum-columns{ gap:18px }
}
@media (max-width: 640px){
   .museum-columns{ flex-direction:column }
   .museum-contact{ order: -1 }
   .contact-form{ flex-direction:column }
   .contact-form input{ width:100% }
   .btn{ width:100% }
}

.sr-only{ position:absolute; left:-9999px; top:auto; width:1px; height:1px; overflow:hidden }

</style>