<template>
    <div class="home">
      <h1>Всё о Daft punk</h1>
      <div class="destinations">
        <router-link
            v-for="destination in destinations"
            :key="destination.id"
            :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}"
        >
          <h2>{{ destination.name }}</h2>
          <img :src="`/images/${destination.image}`" :alt="destination.name" class="home-img"/>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import sourceData from '@/data.json'
  
  export default {
    data() {
      return {
        destinations: sourceData.destinations
      }
    }
  }
  </script>
  <style>
</style>