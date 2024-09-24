<template>
    <div class="h-screen main-layout">
        <div class="p-2 w-full" style="grid-area: nav">
          <Navbar  />
        </div>
        <NavigationMenu style="grid-area: menu" />
        <div style="grid-area: main" class="pr-4">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="css" scoped>
.main-layout {
    display: grid;
    grid-template-rows: 5rem 1fr;
    grid-template-columns: 15rem 1fr;
    gap: 1rem;
    grid-template-areas:
        "nav nav nav"
        "menu main main"
        "menu main main";
}
</style>
