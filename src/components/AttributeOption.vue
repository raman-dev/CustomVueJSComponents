<script setup>
import {ref} from 'vue';

const model = defineModel();
const emit = defineEmits(['attrSelected']);

function onClick(){
    emit('attrSelected');
}

</script>

<template>
    
    <div
        class="my-2 d-flex border border-rounded align-items-center" 
        @click="onClick()" :class="{ 'attr-option-selected' :model.selected}">
            <h5 class="mx-4">{{ model.label }}</h5>
            <p class="p-0 m-0">{{ model.description }}</p>
    </div>

</template>

<style scoped>
    :hover{
        cursor: pointer;
    }
    h5 {
        width: 7ch;
    }

    .attr-option-selected{
        background-color: lavender;
    }
</style>
