<template>
  <div class="sidebar">
    <div class="sidebar__inner" @scrollReachBottom="loadMore">
      <sidebar-nav :links="browse" />
      <sidebar-nav title="About me" :links="library" />
      <sidebar-nav title="Social" :links="contacts" />
      <sidebar-nav title="Playlists" :links="playlists.items" />
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import SidebarNav from "./SidebarNav";
  import PlaylistCreateModal from "@/components/PlaylistCreateModal";

  export default {
    name: "sidebar",

    components: {
      SidebarNav
    },

    computed: {
      ...mapGetters("user", {
        playlists: "getPlaylists"
      }),

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
    },

    methods: {
      ...mapActions("user", {
        getUserPlaylists: "getCurrentUserPlaylists"
      }),

      loadMore() {
        //@todo
        this.getUserPlaylists(25);
      }
    },

    created() {
      this.getUserPlaylists();
    }
  };
</script>

<style scoped lang="sass">

  .sidebar
    position: relative
    padding-top: 30px
    background: $c-black

    &__inner

    &__btn
      display: flex
      align-items: center
      position: absolute
      bottom: 0px
      height: 50px
      width: 100%
      margin-top: 20px
      padding: 0 15px
      color: $c-gray
      font-size: 14px
      border-top: 1px solid $c-sirocco
      outline: 0
      cursor: pointer

      &:hover
        color: $c-white

    &__btn-icon
      margin: auto 8px

    .sidebar-nav
      &:not(:last-of-type)
        margin-bottom: 30px
</style>
