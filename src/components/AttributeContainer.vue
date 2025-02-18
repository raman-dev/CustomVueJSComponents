<script setup>
import { ref,onMounted } from 'vue';
import AttributeOption from './AttributeOption.vue'

const props = defineProps(['attrName']);

const selected = ref('value-0');
const currentAttrOption = ref('value-0');

const inEditMode = ref(false);

const attrOptions = ref([
    {value:'value-0',description:'description-0',selected:true},
    {value:'value-1',description:'description-1',selected:false},
    {value:'value-2',description:'description-2',selected:false}
]);

const model = defineModel();

const attrOptions2 = ref({
  'value-0':{
    label:'value-0',
    description:'description-0',
    selected: true
  },
  'value-1':{
    label:'value-1',
    description:'description-1',
    selected: false
  },
  'value-2':{
    label:'value-2',
    description:'description-2',
    selected: false
  },
});


function showOptions(){
  inEditMode.value = !inEditMode.value;
  //closing
  if (inEditMode.value == false){
    if (selected.value != 'unselected'){
      attrOptions2.value[selected.value].selected = false;
    }
    attrOptions2.value[currentAttrOption.value].selected = true;
  }else{
    selected.value = currentAttrOption.value;
  }
}

function commitChanges(){

}

function onSelectAttr(attr,index){
  //then selected should be deselected
  if (attr.selected == true){//selected is equal to previous selected
      // deselect
      attrOptions2.value[attr.label].selected = false;
      selected.value = 'unselected';
  }else{
    //deselect prev if selected
    if (selected.value != 'unselected'){
      attrOptions2.value[selected.value].selected = false;
    }
    //select current clicked
    attrOptions2.value[attr.label].selected = true;
    // selected.value = attrOptions2.value[attr.label];
    selected.value = attr.label;
    // selected.value.selected = true;
  }
}


</script>

<template>
  <div>
    <div class="selected-state-container border my-2 p-1 d-flex align-items-center justify-content-between">
      <div class="selected-state d-flex">
        <div>
          <h4 class="m-0">{{ props.attrName }}</h4>
        </div>->
        <h6 class="m-0">{{ attrOptions2[currentAttrOption].label }}</h6>
      </div>
      <div>
        <button class="btn btn-info mx-2" @click="showOptions()">edit</button>
        <button class="btn btn-outline-primary">commit</button>
      </div>
    </div>
    <div class="option-container border p-2" :class="{ 'show-options' : inEditMode }">
      <div v-for="(attr,name,index) in attrOptions2">
        <AttributeOption @attr-selected="onSelectAttr(attr,index)" v-model="attrOptions2[name]" :key="index"/>
      </div>
    </div>
    <div class="border p-1">
      <span class="border rounded">{{ attrOptions2[currentAttrOption].description }}</span>
    </div>
  </div>
    

</template>

<style scoped lang="scss">
  .option-container{
    height: 0px;
    overflow-y: hidden;
    
    padding: 0px !important;
    border-width: 0px;
  }
  .show-options.option-container{
    height:initial;
  }

</style>
