<script setup>

import RoomCard from "../components/RoomCard.vue";
</script>

<template>
  <div class="font-sans">

    <img class=" max-w-full xl:mx-auto object-cover h-96 w-full " src="../assets/homestaybeachpic.jpg" alt="image description">

    <div class="container mx-auto p-8">
      <!-- Header Section -->
      <div class="text-center mb-8">
        <h1 class="text-5xl font-bold">Rooms</h1>
        <p class="text-gray-500 text-xl">Select your preferred room type and book now</p>
      </div>

      <!-- Search Section -->

      <!-- Rooms Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RoomCard v-for="room in rooms" :key="room.id" :room="room" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  
</style>