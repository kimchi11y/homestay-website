
<template>
  <navbar></navbar>
  <div class="font-sans">
    <div class="container mx-auto p-8">
      <!-- Header Section -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold">Rooms</h1>
        <p class="text-gray-500">Select your preferred room type and book now</p>
      </div>

      <!-- Search Section -->
      <div class="flex space-x-4 mb-8">
        <input type="date" class="p-2 border rounded" placeholder="Check-in Date"/>
        <input type="date" class="p-2 border rounded" placeholder="Check-out Date"/>
        <input type="number" min="1" class="p-2 border rounded" placeholder="Guests"/>
        <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Check Availability</button>
      </div>

      <!-- Rooms Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RoomCard v-for="room in rooms" :key="room.id" :room="room" />
      </div>
    </div>
  </div>
</template>

<script>
import RoomCard from './components/RoomCard.vue';
import Navbar from "./components/Navbar.vue";
export default {
  components: {Navbar, RoomCard },
  data() {
    return {
      rooms: [
        {
          id: 1,
          name: 'Luxury Super Deluxe',
          description: 'A luxurious room with stunning views and top amenities.',
          price: 299,
          beds: 2,
          image: 'https://via.placeholder.com/400x300' // Replace with actual images
        },
        {
          id: 2,
          name: 'Simple Family Room',
          description: 'A cozy family room with modern conveniences.',
          price: 399,
          beds: 2,
          image: 'https://via.placeholder.com/400x300'
        },
        {
          id: 3,
          name: 'Luxury Family Deluxe',
          description: 'A spacious room perfect for family stays.',
          price: 499,
          beds: 3,
          image: 'https://via.placeholder.com/400x300'
        },
        {
          id: 4,
          name: 'Single Super Deluxe',
          description: 'A single room for solo travelers, comfortable and elegant.',
          price: 599,
          beds: 1,
          image: 'https://via.placeholder.com/400x300'
        }
      ]
    };
  }
};
</script>
