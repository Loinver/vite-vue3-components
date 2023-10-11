import { createApp } from 'vue'
import MyComponent from '@my-component/core/index'
import '@my-component/core/style/index.scss'
import App from './App.vue'

const app = createApp(App)

app.use(MyComponent)

app.mount('#app')
