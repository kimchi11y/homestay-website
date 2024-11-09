
<template>
  <Navbar></Navbar>
 <RouterView></RouterView>
</template>

<script>
import RoomCard from './components/RoomCard.vue';
import Navbar from "./components/Navbar.vue";
import Navbar2 from "./components/Navbar2.vue";
export default {
  components: {Navbar2, Navbar, RoomCard },
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
