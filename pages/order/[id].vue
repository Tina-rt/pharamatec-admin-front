<template>
    <div class="p-4 flex flex-col gap-5">
        <NuxtLink to="/order" class="btn btn-ghost w-fit"
            ><Icon size="30" name="mdi-arrow-left-thin" /> Go back</NuxtLink
        >
        <div class="flex gap-3 items-center">
            <h1 class="text-3xl">Orders Id : {{ currentOrderId }}</h1>
            <div class="status badge badge-accent">Pending</div>
            <div class="status badge badge-success">Credit card</div>
        </div>
        <div class="date-section">{{ new Date().toLocaleString() }}</div>
        <div class="border rounded-lg border-gray-500 p-3 flex flex-col gap-4">
            <h2 class="text-2xl">Order Items</h2>
            <div class="flex gap-4" v-for="order in orderItems">
                <div class="img-section">
                    <img
                        :src="$renderImage(order.image)"
                        alt="product image"
                    />
                </div>
                <div class="flex justify-between items-center w-full">
                    <div class="desc flex flex-col h-full">
                        <div class="name font-bold">{{ order.nomProduit }}</div>
                        <div class="brand"></div>
                        <div class="price">Ar {{ order.prixUnitaire }}</div>
                        <div class="qty">Qty: {{ order.quantite }}</div>
                    </div>
                    <div class="flex gap-3 h-fit">
                        <div class="border border-gray-600 p-2 rounded-lg">
                            {{ order.quantite }} x Ar {{ order.prixUnitaire }}
                        </div>
                        <div class="border border-gray-600 p-2 rounded-lg">
                            Ar {{ order.prixAvecTva }} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex gap-2">
            <div class="btn btn-primary">Approve this order</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { OrderItem } from '~/types/orderItem.models';

const currentOrderId = ref<string>('');
const route = useRoute();

const orderItems = ref<OrderItem[]>([]);

onMounted(() => {
    currentOrderId.value = route.params.id as string;

    getOrderById(+currentOrderId.value)
        .then((data) => {
            orderItems.value = data.map((item: any) => {
                return {
                    id: item.idCommande,
                    idProduit: item.idProduit,
                    nomProduit: item.nomProduit,
                    quantite: item.quantiteCommandee,
                    prixUnitaire: item.prixUnitaire,
                    tva: item.tva,
                    prixAvecTva: item.prixAvecTVA,
                    image: item.image,
                    statut: item.statut
                }
            });
            console.log(orderItems.value)
        })
        .catch(() => {});
});
</script>

<style lang="scss" scoped>
.img-section{
    max-width: 10rem;
}
</style>
