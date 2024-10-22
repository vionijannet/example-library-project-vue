import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "vite-project-library/dist/style.css";
import plugin from 'vite-project-library'; 

createApp(App)
.use(plugin)
.mount('#app')
