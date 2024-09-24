<template>
  <div class="flex flex-col gap-4">
      <h1 class="text-2xl">Produits</h1>
      <div class="card bg-base-200 p-4 flex flex-col gap-4">
          <div class="w-full flex justify-end">
              <NuxtLink to="/products/add" class="btn btn-primary">Ajouter un nouveau produits</NuxtLink>
          </div>
          <table class="table">
              <thead>
                  <tr>
                      <th></th>
                      <th>Id</th>
                      <th>Nom</th>
                      <th>Description</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Image</td>
                      <td>1</td>
                      <td>Pharma</td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
