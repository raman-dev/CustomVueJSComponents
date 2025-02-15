<script setup>

import {ref} from 'vue'

const props = defineProps(['attr'])

</script>

<template>
    <div>
        {{ props.attr }}
    </div>
</template>