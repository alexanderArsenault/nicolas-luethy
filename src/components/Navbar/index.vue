<template>
  <nav class="navbar">
    <div class="container">
      <navbar-history />
      <navbar-search />
      <navbar-nav />
    </div>
    <div class="bars-container medium-show desktop-hide">
      <icon @click="binclicked()" name="bars"></icon>
    </div>
    <div v-if="clicked" @click="clicked = hide" class="mobile-nav">
      <sidebar-nav :links="browse" />
      <sidebar-nav title="About me" :links="library" />
      <sidebar-nav title="Social" :links="contacts" />
    </div>
  </nav>
</template>

<script>
  import SidebarNav from "../MobileNav/MobileNav";
  import NavbarHistory from "./NavbarHistory";
  import NavbarSearch from "./NavbarSearch";
  import NavbarNav from "./NavbarNav";

  export default {
    name: "navbar",
    data() {
      return {
        clicked: false
      };
    },
    components: {
      SidebarNav,
      NavbarHistory,
      NavbarSearch,
      NavbarNav
    },
    methods: {
      binclicked() {
        this.clicked = true;
      }
    },
    computed: {
      browse() {
        return [
          {
            type: "browse",
            name: "Browse Nici"
          }
        ];
      },

      contacts() {
        return [
          {
            type: "spotify",
            name: "Spotify"
          },
          {
            type: "linkedin",
            name: "linkedIn"
          },
          {
            type: "instagram",
            name: "Instagram"
          }
        ];
      },

      library() {
        return [
          {
            type: "skills",
            name: "Skills"
          },
          {
            type: "work",
            name: "Work"
          },
          {
            type: "education",
            name: "Education"
          }
        ];
      }
    }
  };
</script>

<style scoped lang="sass">
  .mobile-nav
    position: absolute
    z-index: 100000
    top: 0
    background-color: #333
    left: 0
    width: 100vw
    height: 100vh

  .container
    display: flex

  .bars-container
    margin-right: 10px
    padding: 5px

  .navbar
    display: flex
    justify-content: space-between
    align-items: center
    height: 40px
    background: $c-shark

    .navbar-history
      display: flex
      margin-left: 6px

    .navbar-search
      display: flex
      align-items: center
      margin-left: 6px

    .navbar-nav
      margin: auto 30px auto auto
</style>
