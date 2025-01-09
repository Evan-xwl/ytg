import { createApp } from 'vue'
import App from '@/App.vue'
import '@/styles/reset.scss'
import HospitalBottom from '@/components/bottom/index.vue'
import HospitalTop from '@/components/top/index.vue'

const app = createApp(App);
app.component('HospitalBottom', HospitalBottom)
app.component('HospitalTop', HospitalTop)
app.mount('#app')
