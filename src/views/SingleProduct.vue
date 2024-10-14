<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const route = useRouter()


onMounted (() => {
    const response = axios.get('https://fakestoreapi.com/products')
})
</script>

<template>
    <h1>Toode</h1>
</template>
