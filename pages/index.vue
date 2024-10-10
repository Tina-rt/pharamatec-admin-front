<template>
  <div class="p-4"> 
    <div class="flex gap-4">
      <CardStats amount="12.434.300" subtitle="Recette total" unit="Ar"/>
      <CardStats amount="200" subtitle="Nombre total de commande" />
      <CardStats amount="17" subtitle="Nombre de produits en ligne" />
    </div>
    <div class="p-4 w-full  grid grid-cols-2 gap-2">
      <ChartSales />
      <ChartProduct />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['auth']
})
</script>

<style>

</style>