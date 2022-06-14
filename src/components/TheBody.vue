<template>
    <div class="card">
        <h2>Your Tasks</h2>
        <h5>Active tasks: {{ active }}</h5>
        <hr />
        <div v-for="(task, id) in notes" :key="id">
            <h3>{{ task.title }}</h3>
            <div class="list d-flex justify-content-between">
                <div><strong>Type: </strong>
                    <p class="type" :class="task.type.toLowerCase()">{{ task.type }}</p>
                </div>
                <div><strong>Deadline: </strong>
                    <p>{{ task.date }}</p>
                </div>
            </div>
            <button class="btn btn-list" @click="click(id)">Show</button>

            <app-task-body :selectedPost="thisPost" v-if="modal" @close="modal = false"></app-task-body>
        </div>

    </div>
</template>

<script>
import { ref, inject, provide } from 'vue';
import AppTaskBody from './AppTaskBody.vue'

export default {
    setup() {
        let notes = inject('notes');
        let types = inject('types');
        let active = inject('active')
        let modal = ref(false);
        const change = ref(false);
        let thisPost = ref({});


        provide('active', active)


        function click(id) {
            modal.value = true;
            thisPost.value = notes[id];
        }
        


        return {
            notes,
            types,
            active,
            click,
            modal,
            thisPost,
            change,
        }
    },
    components: {
        AppTaskBody
    }

}
</script>

<style>
.list {
    width: 80%;
    margin: 0 auto;
}

.btn-list {
    margin: 30px 0;
    padding: 0.3rem 1.9rem;
    border-color: rgb(54, 54, 45) !important;
    border: 1px solid;
}
</style>