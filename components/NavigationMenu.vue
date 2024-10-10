<template>
    <div class="p-3">
        <ul class="menu bg-base-200 rounded-xl shadow-xl w-full h-full py-5">
            <li>
                <NuxtLink to="/"> <Icon name="mdi-monitor-dashboard"/>Dashboard</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/products">
                    <Icon name="mdi:package-variant-closed" />
                    Products</NuxtLink
                >
            </li>
            <li ><NuxtLink to="/order"> <Icon name="mdi-invoice-multiple" /> Order</NuxtLink></li>
            <li><NuxtLink to="/customers"><Icon name="mdi-account-box-multiple-outline" /> Customers</NuxtLink></li>
            <li><NuxtLink href="" @click="logout"> <Icon name="mdi-logout"/> Logout</NuxtLink></li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { useMyAuthStore } from '~/store/auth';

const authStore = useMyAuthStore();
const router = useRouter();
const logout = () => {
    authStore.clearToken();
    router.push('/auth');
};
</script>

<style></style>
