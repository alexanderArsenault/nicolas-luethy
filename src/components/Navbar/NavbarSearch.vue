<template>
  <form class="navbar-search">
    <div class="search-container">
      <input
        class="navbar-search__input"
        type="search"
        v-model="text"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="navbar-search__btn">
        <icon name="search" />
      </button>
    </div>
    <p class="search-text" v-if="text.length > 0">
      - Only one candidate found!
    </p>
  </form>
</template>

<script>
  import router from "@/router";
  import { mapActions } from "vuex";

  export default {
    name: "navbar-search",
    data() {
      return {
        text: ""
      };
    },

    methods: {
      ...mapActions({
        search: "search/search"
      })
    }
  };
</script>

<style scoped lang="sass">
  .search-text
    width: 300px
    padding-left: 15px
    font-size: 12px

  .search-container
    position: relative
    font-size: 14px

  .navbar-search
    &__input
      height: 25px
      max-width: 150px
      margin: 0
      padding-right: 20px
      border-radius: 30px

    &__btn
      position: absolute
      right: 5px
      top: 0
      bottom: 0
      height: 16px
      margin: auto 0
      color: $c-shark
      outline: none
      pointer-events: none
</style>
