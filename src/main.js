import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';
import { reactive } from 'vue';

let notes = reactive([
    { title: 'Deep Clean Apartment', date: '12.06.2022', body: 'Reiciendis suscipit harum iusto sunt eaque fuga error veniam facilis culpa vero.', type: 'Active' },
    { title: 'Write resigntion letter', date: '20.04.2022', body: ' Numquam dolor quibusdam dolore iste optio possimus repudiandae culpa tenetur nisi, obcaecati cumque qui molestiae labore illo eaque, ea quod voluptates ipsa.', type: 'Cancelled' },
    { title: 'Go play football', date: '05.09.2022', body: ' Impedit eius autem, laboriosam aut neque amet nostrum consequatur! Odio, neque aut.', type: 'Active' },
    { title: 'Clean physical workspace', date: '29.06.2022', body: 'Tempora ea, tenetur sit repellat exercitationem impedit ducimus dolorum reprehenderit iste fugit.', type: 'Done' },
    { title: 'Send flowers to mom', date: '01.07.2022', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, reprehenderit!', type: 'Pending' }
])
localStorage.setItem('notes', notes);

let notesStorage = localStorage.getItem('notes')
console.log(notesStorage);

const types = [
    { name: 'Active', class: 'active', id: 'act' },
    { name: 'Cancelled', class: 'cancelled', id: 'can' },
    { name: 'Done', class: 'done', id: 'done' },
    { name: 'Pending', class: 'pending', id: 'pend' },
];


const app = createApp(App);
app.provide('notes', notes);
app.provide('types', types);
app.mount('#app')