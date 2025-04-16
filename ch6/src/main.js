import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ByeWorld from './components/ByeWorld.vue'
import HelloWorld from './components/HelloWorld.vue'

// createApp(App).mount('#app')
// createApp method is stored in variable so it can be modified easily
const app = createApp(App)
app.component("ByeWorld", ByeWorld)

// app.component("component-name", component-definition)    
// app.component("ByeWorld", ByeWorld)
//         |              |
//     👈 The name          👈 The actual component (usually imported)
//     you will use        in your template like <ByeWorld />
//     in templates



app.component("HelloWorld", HelloWorld)

// now is mounted separately after adding the other components to it
app.mount('#app')
