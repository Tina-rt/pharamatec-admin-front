<template>
  <div class="w-full h-full grid place-items-center">
    <div class="card bg-base-100 w-11/12 sm:w-1/3 sm:max-w-[400px] shadow-xl p-3">
      <h1 class="card-title flex w-full justify-center text-3xl text-center">Pharmatech-Admin Login</h1>
      <div class="card-body">
        <form action="" class="flex flex-col gap-3">
          <input type="email" class="input input-bordered form-control" placeholder="Email">
          <input type="password" class="input input-bordered form-control" placeholder="Mot de passe">
          <input type="submit" class="btn btn-primary" value="Submit" >
        </form>
      </div>
    </div>    
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  layout: 'loginlayout'
})


</script>

<style>

</style>