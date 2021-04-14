<script>
export default {
  name: 'Card',
  props: ['item'],
}
</script>
<template>
  <div class="shadow-md rounded-lg w-auto h-48 p-5 bg-green-100">
    <p>Name: {{ item.name }}</p>
    <p>Height: {{ item.height }}cm</p>
    <p class="capitalize">Gender: {{ item.gender }}</p>
    <p class="capitalize">Hair Color: {{ item.hair_color }}</p>
  </div>
</template>
