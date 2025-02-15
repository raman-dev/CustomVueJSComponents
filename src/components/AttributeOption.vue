<script setup>
import {ref} from 'vue';

const selected = ref(false);
const props = defineProps(['value','description']);

function onClick(){
    selected.value = !selected.value;
}
</script>

<template>
    
    <div
        class="my-2 d-flex border border-rounded align-items-center" 
        @click="onClick()">
            <h5 class="mx-4">{{ props.value }}</h5>
            <p class="p-0 m-0">{{ props.description }}</p>
    </div>

</template>

<style scoped>
    :hover{
        cursor: pointer;
    }
    h5 {
        width: 7ch;
    }
</style>
