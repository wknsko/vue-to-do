<template>
    <form @submit.prevent="submit" class="card pt-5">
        <h2>Add to To do List</h2>
        <label for="input-title">Add your title of the task</label>
        <input type="text" v-model="title" id="input-title" />
        <label for="input-due-date">Deadline of the task</label>
        <input type="date" v-model="date" id="input-due-date" />
        <label for="input-body">Add more info about the task</label>
        <textarea v-model="body" id="input-body"></textarea>
        <label for="input-type">Type of the task</label>

        <select class="form-select" v-model="type" id="type">
            <option value="" disabled hidden>Change type of this task</option>
            <option v-for="item in types" :key="item.id" :value="item.name">{{ item.name }}
            </option>

        </select>
        <button type="submit" class="btn btn-add">Send Task</button>

    </form>
</template>

<script>
import { watch, inject, ref } from 'vue';
export default {
    setup() {
        const types = inject('types');
        let notes = inject('notes');
       
        const title = ref('');
        const date = ref('');
        const body = ref('');
        const type = ref('');
        let active = inject('active');
        watch(notes, () => {
            localStorage.setItem('notes', JSON.stringify(notes));
            
        })
      

        function submit() {
            console.group()
            console.log('Title: ' + title.value);
            console.log('Date: ' + date.value);
            console.log('Info: ' + body.value);
            console.log('Type: ' + type.value);
            console.groupEnd()
            notes.unshift({ title: title.value, date: 
            date.value, body: body.value, type: type.value });
            active.value = notes.filter(el => el.type === 'Active').length;
            title.value = date.value = body.value = type.value = '';
            localStorage.setItem('notes', JSON.stringify(notes));
            
        }

        return {
            types,
            title,
            date,
            body,
            type,
            submit,
            
        }
    },
    
}
</script>

<style>
.card {
    max-width: 700px;
    margin: 0 auto;
    margin-bottom: 20px
}

.btn-add {
    margin-top: 20px;
    background-color: #e8edbef3;
    color: rgb(48, 51, 62);
}

.btn-add:hover {
    background-color: #efffad;
}
</style>