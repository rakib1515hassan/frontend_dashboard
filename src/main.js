import { createApp } from 'vue'
import './style.css'

import MasterComponent from './MasterLayout.vue'
// import {
//     QuizListComponent,
//     QuizCreateComponent,
//     QuizEditComponent,
//     QuizDetailsComponent
// } from '../../template/assets/js/app'



//! Create Vue Instance
// const app = createApp({});
const app = createApp(MasterComponent);

// const app = createApp({
//   render: () => h(MasterLayout, null, { default: () => h(HomePage) }),
// });


// mounted components
app.mount('#app');

