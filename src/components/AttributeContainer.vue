<script setup>
import { ref } from 'vue';
import AttributeOption from './AttributeOption.vue'

const props = defineProps(['attrName']);
const selected = ref({value:"untested",description:"untested"});

const attrOptions = ref([
    {value:'value-0',description:'description-0'},
    {value:'value-1',description:'description-1'},
    {value:'value-2',description:'description-2'}
]);

</script>

<template>
    <div class="selected-state-container border my-2 p-1 d-flex align-items-center justify-content-between">
      <div class="selected-state d-flex">
        <div>
          <h4 class="m-0">{{ props.attrName }}</h4>
        </div>->
        <h6 class="m-0">{{ selected.value }}</h6>
      </div>
      <div>
        <button class="btn btn-info mx-2">edit</button>
        <button class="btn btn-outline-primary">commit</button>
      </div>
    </div>
    <div class="border p-2">
      <div v-for="(attr,index) in attrOptions">
        <AttributeOption v-bind="attr" :key="index"/>
      </div>
    </div>
    <div class="border p-1">
      <span class="border rounded">{{ selected.description }}</span>
    </div>

</template>

<style scoped>
  

</style>
