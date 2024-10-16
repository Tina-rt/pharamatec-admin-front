<template>
    <div class="p-4">
        <h1 class="text-3xl">Les clients</h1>
        <div class="pt-5">
            <DataTable
                :value="clientList"
                v-model:filters="filters"
                :globalFilterFields="['nom', 'email', 'phone']"
                scrollHeight="500px"
            >
                <template #header>
                    <div class="flex justify-end">
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText
                                v-model="filters['global'].value"
                                placeholder="Keyword Search"
                            />
                        </IconField>
                    </div>
                </template>
                <Column field="id" header="Id"></Column>
                <Column field="nom" header="Nom"></Column>
                <Column field="phone" header="Telephone"></Column>
                <Column field="email" header="Email"></Column>
            </DataTable>
            <!-- <table class="table">
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
            </table> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { User } from '~/types/user.models';
import { FilterMatchMode } from '@primevue/core/api';

const clientList = ref<User[]>([]);

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    nom: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

getAllClients().then((data) => {
    clientList.value = data;
    console.log(data);
});
</script>

<style></style>
