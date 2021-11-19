<template>
     <div class="col-md-6 box" dropzone="" @drop.prevent="dropItem" @dragover.prevent>
       <div class="row mt-3 h-100 align-items-end">
         <div class="col-3"></div>
        <Draggable v-for="i in room.items" :key="i.id" :item="i" :oldRoomId="room.id" />
       </div>
      </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { itemsService } from "../services/ItemsService"
export default {
  props: {room: {type: Object, required: true}},
  setup(props){
    return {
      backgroundImage: computed(() => `url(${props.room.backgroundImage})`),
      dropItem(){
       itemsService.moveItem(props.room.id)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.box{
  height: 50vh;
  border: 2px solid black;
  background-repeat: no-repeat;
  background-image: v-bind(backgroundImage);
  background-size: cover;
}

.villager{
  border: 8px groove #CD7F32;
  height: 100px;
  width: 100px;
}


</style>
