<template>
<div class="col-4 mb-3" draggable="true" @dragstart="prepToMove">
    <img class="item" :title="item.name + ' | ' + item.type" :src="item.image" alt="">

</div>
</template>


<script>
import { logger } from "../utils/Logger"
import {itemsService} from '../services/ItemsService'
export default {
  props: {item: {type: Object, required: true}, roomId: {type: Number, required: true}},
  setup(props){
    return {
      prepToMove(){
        try {
          itemsService.prepToMove(props.item, props.roomId)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.item{
  height: 150px;
  width: 150px;
}


</style>
