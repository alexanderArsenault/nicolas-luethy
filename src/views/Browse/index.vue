<template>
  <div class="browse-view">
    <div class="artist-header">
      <div class="artist-header__text">
        <div class="caption">Intern</div>
        <h1 class="header-text">Nicolas Lüthy</h1>
        <a href="tel:+4176-509-5595">
          <v-button :onClick="contact">Contact</v-button>
        </a>
      </div>
    </div>
    <div class="browse-view__content">
      <div class="split-left">
        <h1>Dear Spotify Team</h1>
        <p>
          I am currently enrolled at the ZHAW School of Management and Law in
          Zürich and will graduate with a Bachelor (Bsc) in International
          Business Management in June 2020. With this in mind, I am beginning to
          look around for the next big step to help shape my professional
          future.
        </p>
        <p>
          Spotify! Spotify has been a constant part of my life for the last
          eight years and it continues to amaze me every day. Spotify's
          emotional playlists have helped me recover from painful breakups,
          Spotify has always supported me through my busy and sometimes
          turbulent student life and it also provides a digging platform to help
          push my DJ career ( Djmag top 100 – here I come!) So Spotify has
          always been there for me, and now I would like to have the chance to
          be there for Spotify. If you would give me the chance of joining your
          marketing Team, I will promise to use my knowledge about the music
          industry, my creativity as well as my self-driven personality to
          continuously improve Spotify and contribute my part in supplying
          people with amazing music 24/7.
        </p>
        <p>
          I hope I have grabbed your attention and interest and would be very
          happy if I could prove to you my motivation and acquired skills in a
          personal interview.
        </p>
        <p>
          Please do contact me whenever convenient to you.
        </p>
        <div class="links">
          <a href="mailto:nicolas.luethy@hotmail.ch">
            nicolas.luethy@hotmail.ch
          </a>
          <a href="tel:+4176-509-5595">
            +4176-509-5595
          </a>
          <a href="#">References upon request.</a>
        </div>
      </div>
      <div class="split-right">
        <lingallery
          :height="320"
          :startImage="3"
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
    methods: {
      contact() {}
    }
  };
</script>

<style scoped lang="sass">

  .split-right ::v-deep .lingallery_thumbnails
    display: none
    visibility: hidden

  @media (max-width: 1000px)
    .split-right ::v-deep .lingallery
      margin: auto


  .picture-caption
    text-align: center
    font-size: 12px

  .split-left
    width: calc((100% * (3 / 5)) - 30px)
    p
      font-size: 14px

    @media (max-width: 1000px)
      width: 100%
      margin-bottom: 40px

  .split-right
    width: calc((100% - (100% * (3 / 5)))
    @media (max-width: 1000px)
      width: 100%

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
      @media (max-width: 1000px)
        background-size: cover
        background-position: center left


    &__text
      position: relative
      display: flex
      flex-direction: column
      margin-left: 40px
      filter: inital
      height: 100%
      justify-content: center
      @media (max-width: 1000px)
        margin-left: 15px

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
      .links
        width: 100%
        display: flex
        justify-content: space-between
        a
          color: white
          margin-top: 20px
          font-size: 14px

      @media (max-width: 1000px)
        padding: 15px
        flex-direction: column
</style>
