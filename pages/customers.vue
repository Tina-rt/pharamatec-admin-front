<template>
    <div class="p-4">
        <h1 class="text-3xl">Les clients</h1>
        <div class="pt-5">
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            <label for="">
                                <input class="checkbox" type="checkbox" />
                            </label>
                        </th>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Telephone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="client in clientList">
                        <td>
                            <input class="checkbox" type="checkbox" />
                        </td>
                        <td>{{ client.id }}</td>
                        <td>{{ client.nom }} {{ client.prenom }}</td>
                        <td>{{ client.phone }}</td>
                        <td>{{ client.email }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { User } from '~/types/user.models';

const clientList = ref<User[]>([]);

getAllClients().then((data) => {
    clientList.value = data;
});
</script>

<style></style>
