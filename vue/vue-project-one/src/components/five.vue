<template>
    <div>
        <p> <slot></slot> </p>
        <h1> <slot name ='h1'></slot> </h1>
        <h2>  <slot name = 'h2' ></slot> </h2>
        <h3>  <slot name = 'h3' ></slot> </h3>
        <six-demo>
            <template v-slot:h11> 
                第五个组件，具名插槽1
            </template>
            <template v-slot:h21 >
                five 具名插槽2
            </template>
            <template v-slot:h31 >
                five  具名插槽 3
            </template>
        </six-demo>
    </div>
</template>
<script>
import sixDemo from './six.vue';

export default {
    components: {
        sixDemo,
    }
    
}
</script>
