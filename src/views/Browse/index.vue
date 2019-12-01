<template>
  <div class="browse-view">
    <div class="artist-header">
      <div class="artist-header__text">
        <div class="caption">Intern</div>
        <h1 class="header-text">Nicolas Leuthy</h1>
        <v-button :onClick="contact">Contact</v-button>
      </div>
    </div>
    <div class="browse-view__content">
      <div class="split-left">
        <h1>Dear Spotify Team</h1>
        <p>
          I am currently enrolled at the ZHAW School of Management and Law in
          Zurich and will complete my Bachelor (Bsc) in International Business
          Management this coming summer in 2020. For this occasion, I am on the
          search for my next big Challenge, Quest and experience which will
          hopefully help me shape my professional Future.
        </p>
        <p>
          Since Spotify accompanied me quite a long time of my life (Since 2011
          to be precise). Be it by helping me recovering myself from breakup
          pain, thanks to its emotional playlists, or supporting me with music
          24/7, everywhere I go and finally, in providing a digging platform to
          help pushing my amateur DJ career (DJmag top 100 I&#39;m coming). To
          say Thank you for supporting me through all this, I want to commit
          myself to help Spotify staying market Leader within the music
          streaming platform industry in terms of active users using my
          creativity as well as knowledge about the music industry to
          continuously improve Spotify and contribute my part in supplying
          people with music 24/7. In my opinion it looks like a Win-Win
          Situation. I will promise to contribute as much as I can while the
          three-month Summer internship and you will provide me the perfect
          environment to shape and improve my skill set as well as creativity.
        </p>
        <p>
          If you would like to know more about me and my motivation, Please send
          me an invite for an interview and I promise you will not regret it.
        </p>
      </div>
      <div class="split-right">
        <lingallery
          :height="320"
          :items="[
            {
              id: '1',
              src: require('../../assets/img/diashow/1.jpeg'),
              thumbnail: require('../../assets/img/diashow/1.jpeg')
            },
            {
              id: '2',
              src: require('../../assets/img/diashow/2.jpeg'),
              thumbnail: require('../../assets/img/diashow/2.jpeg')
            },
            {
              id: '3',
              src: require('../../assets/img/diashow/3.jpeg'),
              thumbnail: require('../../assets/img/diashow/3.jpeg')
            },
            {
              id: '4',
              src: require('../../assets/img/diashow/4.jpeg'),
              thumbnail: require('../../assets/img/diashow/4.jpeg')
            },
            {
              id: '5',
              src: require('../../assets/img/diashow/5.jpeg'),
              thumbnail: require('../../assets/img/diashow/5.jpeg')
            },
            {
              id: '6',
              src: require('../../assets/img/diashow/6.jpeg'),
              thumbnail: require('../../assets/img/diashow/6.jpeg')
            },
            {
              id: '7',
              src: require('../../assets/img/diashow/7.jpeg'),
              thumbnail: require('../../assets/img/diashow/7.jpeg')
            },
            {
              id: '8',
              src: require('../../assets/img/diashow/8.jpeg'),
              thumbnail: require('../../assets/img/diashow/8.jpeg')
            },
            {
              id: '9',
              src: require('../../assets/img/diashow/9.jpeg'),
              thumbnail: require('../../assets/img/diashow/9.jpeg')
            },
            {
              id: '10',
              src: require('../../assets/img/diashow/10.jpeg'),
              thumbnail: require('../../assets/img/diashow/10.jpeg')
            },
            {
              id: '11',
              src: require('../../assets/img/diashow/11.jpeg'),
              thumbnail: require('../../assets/img/diashow/11.jpeg')
            },
            {
              id: '12',
              src: require('../../assets/img/diashow/12.jpeg'),
              thumbnail: require('../../assets/img/diashow/12.jpeg')
            },
            {
              id: '13',
              src: require('../../assets/img/diashow/13.jpeg'),
              thumbnail: require('../../assets/img/diashow/13.jpeg')
            },
            {
              id: '14',
              src: require('../../assets/img/diashow/14.jpeg'),
              thumbnail: require('../../assets/img/diashow/14.jpeg')
            }
          ]"
        />
        <p class="picture-caption">Click image to change!</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Lingallery from "lingallery";
  import VButton from "@/components/VButton";

  export default {
    name: "browse-view",

    components: {
      VButton,
      Lingallery
    },
    method: {
      contact() {
        alert("contact");
      }
    }
  };
</script>

<style scoped lang="sass">
  .split-right ::v-deep .lingallery_thumbnails
    display: none
    visibility: hidden

  .picture-caption
    text-align: center
    font-size: 12px

  .split-left
    width: calc((100% * (3 / 5)) - 30px)

  .split-right
    width: calc((100% - (100% * (3 / 5)))

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
      display: flex
      justify-content: space-between
</style>
