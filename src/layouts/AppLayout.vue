<template>
  <div class="app-layout">
    <navbar />
    <div class="app-layout__wrap">
      <sidebar class="medium-hide" />
      <div class="app-layout__main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  import Sidebar from "@/components/Sidebar";

  export default {
    name: "AppLayout",

    components: {
      Navbar,
      Sidebar
    }
  };
</script>

<style scoped lang="sass">

  .app-layout
    position: relative
    display: flex
    flex-flow: column
    flex-grow: 1
    color: $c-white

    &__wrap
      display: flex
      flex-flow: row
      flex-grow: 1
      background: $c-shark-dark

    &__main
      flex-grow: 1
      overflow-y: auto

    .sidebar
      width: 220px
      min-width: 220px
</style>
