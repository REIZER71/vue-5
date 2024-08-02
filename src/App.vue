<script>
import TheNavigation from "@/TheNavigation.vue";
export default {
  components: {TheNavigation},
}
</script>

<template>
  <TheNavigation/>
  <div class="container">
    <router-view :key="$route.path"/>
  </div>

</template>