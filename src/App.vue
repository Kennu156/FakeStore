<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'

const products = ref([])

const fetchAllProducts = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data
};

onMounted(async () => await fetchAllProducts())
</script>

<template>
  <h1>Welcome to fake store</h1>
  <div class="grid grid-cols-4 gap-4">
    <article v-for="product in products" :key="product.id">Toote info
    <img :src="product.image" alt=""><h4>{{ product.title }}</h4>
    </article>  
  </div>
  
</template>

