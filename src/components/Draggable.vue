<template>
  <div class="col-4 mb-3" draggable="true" @dragstart="prepToMove">
    <img class="item" :src="item.image" alt="">
  </div>
</template>


<script>
import { itemsService } from "../services/ItemsService"
export default {
  props: {item: {type: Object, required: true}, oldRoomId: {type: Number, required: true}},
  setup(props){
    return {
      prepToMove(){
        itemsService.prepToMove(props.item, props.oldRoomId)
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
