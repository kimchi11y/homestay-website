<!-- src/components/RoomCard.vue -->
<template>
  <div class="p-4 border rounded-lg shadow-md">
    <img :src="room.image" alt="Room Image" class="rounded-lg mb-4 w-full h-48 object-cover"/>
    <h3 class="text-lg font-bold mb-2">{{ room.name }}</h3>
    <p class="text-gray-600 mb-2">{{ room.description }}</p>
    <div class="flex justify-between items-center mb-2">
      <span class="text-xl font-semibold">${{ room.price }}/night</span>
      <span class="text-gray-500">{{ room.beds }} Beds</span>
    </div>
    <button class="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">Book Now</button>
  </div>
</template>

<script>
export default {
  props: {
    room: Object
  }
};
</script>
