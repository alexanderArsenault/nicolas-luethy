<template>
  <div class="browse-view">
    <div class="artist-header">
      <div class="artist-header__text">
        <div class="caption">Intern</div>
        <h1 class="header-text">Nicolas Leuthy</h1>
        <v-button :onClick="create">Contact</v-button>
      </div>
    </div>
    <div class="browse-view__content">
      <h1>Dear Spotify Team</h1>
      <p>
        I am currently enrolled at the ZHAW School of Management and Law in
        Zurich and will complete my Bachelor (Bsc) in International Business
        Management this coming summer in 2020. For this occasion, I am on the
        search for my next big Challenge, Quest and experience which will
        hopefully help me shape my professional Future.
      </p>
      <p>
        Since Spotify accompanied me quite a long time of my life (Since 2011 to
        be precise). Be it by helping me recovering myself from breakup pain,
        thanks to its emotional playlists, or supporting me with music 24/7,
        everywhere I go and finally, in providing a digging platform to help
        pushing my amateur DJ career (DJmag top 100 I&#39;m coming). To say
        Thank you for supporting me through all this, I want to commit myself to
        help Spotify staying market Leader within the music streaming platform
        industry in terms of active users using my creativity as well as
        knowledge about the music industry to continuously improve Spotify and
        contribute my part in supplying people with music 24/7. In my opinion it
        looks like a Win-Win Situation. I will promise to contribute as much as
        I can while the three-month Summer internship and you will provide me
        the perfect environment to shape and improve my skill set as well as
        creativity.
      </p>
      <p>
        If you would like to know more about me and my motivation, Please send
        me an invite for an interview and I promise you will not regret it.
      </p>
    </div>
  </div>
</template>

<script>
  import VButton from "@/components/VButton";

  export default {
    name: "browse-view",
    components: {
      VButton
    }
  };
</script>

<style scoped lang="sass">
  .artist-header
    position: relative
    height: 400px;

    &:before
      content: ''
      position: absolute
      width: 100%
      height: 100%
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(29, 31, 32, 0.99)), url('../../assets/img/aboutme/headshot1crop.jpeg')
      background-size: contain
      background-color: darken(#A5ADBE, 6)
      background-position: center right
      filter: grayscale(100%);
      background-repeat: no-repeat

    &__text
      position: relative
      display: flex
      flex-direction: column
      margin-left: 40px
      filter: inital
      height: 100%
      justify-content: center

      button
        width: 200px
        font-size: 12px

  .browse-view
    max-width: 1100px
    &__nav
      display: flex
      padding: 15px 0
      justify-content: center

    &__nav-item
      position: relative
      margin: 0 15px
      color: $c-gray
      font-size: 17px
      text-transform: uppercase
      cursor: pointer

      &:hover
        color: $c-white

      &--active
        color: $c-white

        &:after
          +horizontal-center
          bottom: -10px
          width: 50px
          height: 3px
          background: $c-green
          content: ''

    &__content
      padding: 30px
      line-height: 25px
</style>
