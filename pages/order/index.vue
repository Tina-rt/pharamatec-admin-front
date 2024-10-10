<template>
    <div class="p-4">
        <h1 class="text-3xl">Orders</h1>
        <div class="pt-5 flex flex-col gap-3" v-if="!isLoading">
            <!-- <template v-if="orderList.size === 0"> -->
            <DataTable :value="orderList" @row-click="handleRowClick" row-hover>
                <Column header="Order id" field="orderId"></Column>
                <Column header="Customer Name" field="customerName"></Column>
                <Column header="Order Date" field="orderDate"></Column>
                <Column header="Order Status" field="orderStatus"></Column>
                <Column header="Total (MGA)" >
                    <template #body="{ data }">
                        {{ $formatCurrency(data.total, true) }}
                    </template>
                </Column>
                <Column header="Actions">
                    <template #body="{ data }">
                        <NuxtLink :to="`order/${data.orderId}`">
                            <button class="btn btn-ghost">
                                <Icon name="mdi-eye" />
                            </button>
                        </NuxtLink>
                       
                    </template>
                </Column>
            </DataTable>
            <!-- </template> -->
            <!-- <table class="table ">
                <thead>
                    <tr class="table-pin-rows">
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Order Status</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-base-100 cursor-pointer" v-for="order in orderList" :key="order.orderId" @dblclick="()=>{
                        $router.push(`order/${order.orderId}`)
                    }">
                        <td>{{ order.orderId }}</td>
                        <td>{{ order.customerName }}</td>
                        <td>{{ order.orderDate }}</td>
                        <td>{{ order.orderStatus }}</td>
                        <td>{{ order.total }}</td>
                        <td class="flex gap-3">
                            <NuxtLink
                                :to="`order/${order.orderId}`"
                            >
                                <button class="btn btn-ghost"><Icon name="mdi-eye"/> </button>
                            </NuxtLink>
                            <NuxtLink
                                :to="{
                                    // name: 'orderDetail',
                                    // params: { id: order.orderId },
                                }"
                            >
                                <button class="btn btn-ghost"><Icon name="mdi-pencil"/> </button>
                            </NuxtLink>
                        </td>
                    </tr>
                </tbody>
            </table> -->
        </div>
        <div v-else class="w-full flex justify-center p-3">
            <Icon name="mdi-loading" class="animate-spin" size="50" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import moment from 'moment';
import type { ProductOrder } from '~/types/productOrder.model';

const router = useRouter();
const orderList = ref<any>([]);

const isLoading = ref(false);

const handleRowClick= (data: any) => {
    const current = data.data;

    router.push(`order/${current.orderId}`);
}

onMounted(() => {
    getAllOrders()
        .then((data: Array<any>) => {
            orderList.value = data.map((item) => {
                return {
                    orderId: item.idCommande,
                    customerName: item.nomUtilisateur,
                    orderDate: moment(item.dateCommande).format(
                        'DD/MM/YYYY HH:MM',
                    ),
                    orderStatus: item.statut,
                    total: item.total,
                };
            });
        })
        .catch((e) => {
            console.log(e);
            orderList.value = [];
        })
        .finally(() => {
            isLoading.value = false;
        });
});
</script>

<style></style>
