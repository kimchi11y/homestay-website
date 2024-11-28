
<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
  <Footer></Footer>
</template>

<script>

import {defineComponent} from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  components: {Footer, Navbar,}
})
</script>
