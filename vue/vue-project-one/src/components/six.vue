<template> 
<div>
   <p> <slot></slot> </p>
        <h1> <slot name ='h11'></slot> </h1>
        <h2>  <slot name = 'h21' ></slot> </h2>
        <h3>  <slot name = 'h31' ></slot> </h3>
        <seven-demo>
            default
            <template solt = 'header'> header</template>
        </seven-demo>
</div>
</template>
<script>
import sevenDemo from './seven.vue';

export default {
    components: {
        sevenDemo,
    }
}
</script>
