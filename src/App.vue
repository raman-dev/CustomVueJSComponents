<script setup>
import AttributeContainer from './components/AttributeContainer.vue'

const attrName = 'Attribute Name';

</script>

<template>
  <main>
    <AttributeContainer :attrName="attrName"/>
  </main>
</template>

