<template>
    <div class="p-4">
        <div class="flex gap-4">
            <CardStats
                :amount="dashboardData?.recetteTotal.toLocaleString()"
                subtitle="Recette total"
                unit="Ar"
            />
            <CardStats
                :amount="dashboardData?.commandes.length"
                subtitle="Nombre total de commande"
            />
            <CardStats
                :amount="dashboardData?.produits"
                subtitle="Nombre de produits en ligne"
            />
        </div>
        <div class="p-4 w-full grid grid-cols-2 gap-2">
            <ChartSales :data="dashboardData?.salesAmountGraph" />
            <ChartProduct :data="dashboardData?.orderedProduitGraph"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ['auth'],
});

const dashboardData = ref<{
    orderedProduitGraph?: any;
    salesAmountGraph?: any;
    salesDataGraph?: any;
    commandes: any;
    recetteTotal: number;
    totalProduitsCommandee: number;
    produits: number;
}>();

getDashboardData().then((data) => {
    console.log(data);
    dashboardData.value = data;
});
</script>

<style></style>
