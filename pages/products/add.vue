<template>
    <div class="flex flex-col gap-4">
        <h1 class="text-2xl">Ajouter un produit</h1>
        <div class="card bg-base-200 p-4 flex flex-col gap-4">
            <form action="" class="flex flex-col gap-4">
                <div class="flex gap-4">
                    <div class="w-52 h-52 bg-base-300 rounded-xl mt-3">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="image"
                            class="w-full h-full object-cover rounded-xl"
                        />
                        <input
                            class="hidden"
                            type="file"
                            id="image"
                            name="image"
                        />
                    </div>
                    <div class="flex-1 flex flex-col gap-2">
                        <div class="flex flex-col">
                            <label for="nom">Nom</label>
                            <input
                                class="input input-bordered"
                                type="text"
                                id="nom"
                                name="nom"
                            />
                        </div>
                        <div class="flex flex-col">
                            <label for="description">Description</label>
                            <textarea
                                class="textarea textarea-bordered"
                                id="description"
                                name="description"
                            ></textarea>
                        </div>

                        <div class="flex gap-2">
                            <div class="flex flex-col flex-1">
                                <label for="marque">Marque</label>
                                <input
                                    class="input input-bordered"
                                    type="text"
                                    id="marque"
                                    name="marque"
                                />
                            </div>
                            <div class="flex flex-col flex-1">
                                <label for="prix">Prix</label>
                                <input
                                    class="input input-bordered"
                                    type="number"
                                    id="prix"
                                    name="prix"
                                />
                            </div>
                            <div class="flex flex-col flex-1">
                                <label for="quantite">Quantite en stock</label>
                                <input
                                    class="input input-bordered"
                                    type="number"
                                    id="quantite"
                                    name="quantite"
                                />
                            </div>
                        </div>
                        <div class="flex gap-2 items-center ">
                            <div class="flex flex-col gap-2 flex-1">
                                <label for="category">Category</label>
                                <select
                                    name="category"
                                    id="cat"
                                    class="select select-bordered"
                                >
                                    <option value="0">Cat 1</option>
                                    <option value="1">Cat 2</option>
                                </select>
                            </div>
                            <div class="flex flex-col gap-2">
                                <label for="numero_serie"
                                    >Numéro de série</label
                                >
                                <input
                                    class="input input-bordered"
                                    type="text"
                                    id="numero_serie"
                                    name="numero_serie"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end gap-4">
                    <NuxtLink to="/products" class="btn btn-error"
                        >Annuler</NuxtLink
                    >
                    <button class="btn btn-primary">Ajouter</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { produitsMedicaux } from '~/mock/produits.mock';
import type { Produits } from '~/types/produits.model';

const productmock = produitsMedicaux;
</script>

<style></style>
