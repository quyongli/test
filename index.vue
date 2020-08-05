<template>
    <div>
        <demo-tree :data = 'data' :defaultData[label] = 'data.text' :defaultData[children] = 'data.son' />
    </div>
</template>
<script>
import demoTree from './tree.vue';
export default {
    components:{
        demoTree
    },
    data(){
        return {
           data: [
  {
    text: "一级 1",
    son: [
      {
        text: "二级 1-1",
        son: [
          {
            text: "三级 1-1-1"
          }
        ]
      }
    ]
  },
  {
    text: "一级 2",
    son: [
      {
        text: "二级 2-1",
        son: [
          {
            text: "三级 2-1-1"
          }
        ]
      },
      {
        text: "二级 2-2",
        son: [
          {
            text: "三级 2-2-1"
          }
        ]
      }
    ]
  },
  {
    text: "一级 3",
    son: [
      {
        text: "二级 3-1",
        son: [
          {
            text: "三级 3-1-1"
          }
        ]
      },
      {
        text: "二级 3-2",
        son: [
          {
            text: "三级 3-2-1"
          }
        ]
      }
    ]
  }
]
        }
    }
    
}
</script>
