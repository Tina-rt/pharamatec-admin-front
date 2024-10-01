<template>
    <div class="flex flex-col gap-4 p-4">
        <h1 class="text-2xl">Produits</h1>
        <div class="card bg-base-200 p-4 flex flex-col gap-4">
            <div class="w-full flex justify-end">
                <NuxtLink to="/products/add" class="btn btn-primary"
                    >Ajouter un nouveau produits</NuxtLink
                >
            </div>
            <table class="table table-zebra">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th></th>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Prix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="p in productList">
                        <td>{{ p.id }}</td>
                        <td>
                            <NuxtImg
                                :src="$renderImage(p.image!)"
                                alt=""
                                class="max-w-28 h-24 max-h-24 object-cover"
                            />
                        </td>
                        <td>{{ p.nom }}</td>
                        <td>{{ p.description }}</td>
                        <td>{{ p.prix }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Produits } from '~/types/produits.model';

const productList = ref<Produits[]>([]);

getProduitsList().then((data) => {
    productList.value = [...data];
    console.log(productList.value);
});
</script>

<style></style>
