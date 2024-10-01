<template>
    <div class="p-3">
        <ul class="menu bg-base-200 rounded-xl shadow-xl w-full h-full py-5">
            <li>
                <NuxtLink to="/products">
                    <Icon name="mdi:package-variant-closed" />
                    Products</NuxtLink
                >
            </li>
            <li><a href="/customers">Customers</a></li>
            <li><a href="">Order</a></li>
            <li><NuxtLink href="" @click="logout">Logout</NuxtLink></li>
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
