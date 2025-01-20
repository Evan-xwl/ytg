import { createApp } from 'vue'
import App from '@/App.vue'
import '@/styles/reset.scss'
import HospitalBottom from '@/components/bottom/index.vue'
import HospitalTop from '@/components/top/index.vue'
import router from '@/router/index.ts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.component('HospitalBottom', HospitalBottom)
app.component('HospitalTop', HospitalTop)
app.use(ElementPlus as any)
app.use(router)
app.mount('#app')
