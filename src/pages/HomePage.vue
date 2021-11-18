<template>
  <div class="container-fluid bg-image">
    <div class="row">
      <Room v-for="r in rooms" :key="r.id" :room="r" />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
export default {
  name: 'Home',
  setup(){
    return {
      rooms: computed(() => AppState.rooms)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
