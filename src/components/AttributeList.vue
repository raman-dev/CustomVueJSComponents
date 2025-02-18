<script setup>
import AttributeContainer from './AttributeContainer.vue';

const items = {
    'attrName0':'attr-0',
    'attrName1':'attr-1',
    'attrName2':'attr-2',
};

const attrData = {
    name:'attrName',
    attrOptionsData: [{
            label:'value-0',
            description:'description',
            selected:true
        },{
            label:'value-1',
            description:'description',
            selected:false
        },{
            label:'value-2',
            description:'description',
            selected:false
        }]
};


</script>

<template>
    <div v-for="(value,name,index) in items">
        <AttributeContainer :attr-name="value" :key="index" v-model="attrData"/>
    </div>
</template>