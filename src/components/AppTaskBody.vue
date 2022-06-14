<template>
    <div id="modal-template" @click.self="close">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div @click="$emit('close')" class="close"></div>
                    <h4>{{selectedPost.title}}</h4>
                    <div class="type" :class="selectedPost.type.toLowerCase()">{{ selectedPost.type}}</div>
                    <p>{{ selectedPost.body}}</p>
                    <button @click="changeType" class="btn btn-modal">{{ !change ? 'Change Type' : 'OK'}}</button>
                    <form v-if="change">
                        <select class="form-select" v-model="typeInput">
                            <option value="" selected disabled hidden>Change type of this task</option>
                            <option v-for="type in types" :value="type.id" :key="type"> {{type.name}} </option>
                        </select>

                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { inject, ref, toRefs,  } from 'vue'
export default {

    props: {
        selectedPost: {
            type: Object
        }
    },
    
    setup(props) {
        let notes = inject('notes');
        const types = inject('types');
        let active = inject('active')
        let change = ref(false);
        let selected = toRefs(props.selectedPost);
        let typeInput = ref('');
        

         function changeType(){
             if (this.change) {
            selected.type.value = this.types.find(e => e.id === typeInput.value).name;
            active.value = notes.filter(el => el.type === 'Active').length
            
             } else {

                 this.change = true;

             }
            
            
        }



        return {
            notes, 
            types, 
            change, 
            props,
            active,
            typeInput, 
            
            changeType,
           
               }
    }

}
</script>

<style scoped>
.btn-modal {
    border: 1.3px solid #d7e64c;
    color: #a5b236;
    padding: 0.3rem 1.7rem;
    margin: 15px 0;

}

.btn-modal:hover {
    color: #d2de68;
}

</style>