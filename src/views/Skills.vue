<template>
  <div class="content">
    <h1 class="header-text">
      Skills
    </h1>
    <div class="gallery-container">
      <div class="gallery-item" v-for="skill in skills">
        <div
          :style="
            `background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(29, 31, 32, 0.9)), url(${require('../assets/img/skills/' +
              skill.img)})`
          "
          class="gallery-item-image"
        >
          <icon :name="skill.icon"></icon>
          <p class="title">{{ skill.title }}</p>
          <p class="hover-text">{{ skill.text }}</p>
        </div>
      </div>
    </div>
    <div class="split-container">
      <div class="split-left">
        <h1 class="header-text">
          Strengths
        </h1>
        <div class="gallery-container gallery-container-partial">
          <div
            class="gallery-item gallery-item-partial"
            v-for="skill in strengths"
          >
            <div
              :style="
                `background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(29, 31, 32, 0.9))`
              "
              class="gallery-item-image"
            >
              <icon :name="skill.icon"></icon>
              <p class="title">{{ skill.title }}</p>
              <p class="hover-text">{{ skill.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="split-right">
        <h1 class="header-text">
          More
        </h1>
        <p>
          My interests include music, sport, exploring new technologies and
          researching wines. I'm a part of a collective which organizes concerts
          and parties in different venues around Zurich. While studying in
          Bordeaux, I was a part of the Vinseec Wine Association and my long
          term personal goals include becoming a wine somalier and working where
          business and technology intersect.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "skills",
    data() {
      return {
        strengths: [
          {
            title: "Teamplayer",
            icon: "users"
          },
          {
            title: "Goal oriented",
            icon: "bullseye"
          },
          {
            title: "Problem solving",
            icon: "handshake"
          },
          {
            title: "Interested",
            icon: "map-marker"
          },
          {
            title: "Adaptable",
            icon: "exchange-alt"
          },
          {
            title: "Leadership",
            icon: "book-reader",
            text:
              "Helped organize a Wine Expo with over 500 Participants during my year abroad (Salon Art Di'vin 2019)"
          }
        ],
        skills: [
          {
            title: "Word",
            text:
              "Fully Experienced knowledge by Application in all my papers.",
            icon: "file-word",
            img: "word.jpg"
          },
          {
            title: "Excel",
            text:
              "Very advanced experiences Using advanced formulas that have been used directly in scoring models and data analysis while working at Bank Vontobel and during my Projects during my studies",
            icon: "file-excel",
            img: "excel.jpg"
          },
          {
            title: "PowerPoint",
            img: "ppt.jpg",
            text:
              "Professionally use to direct and implement presentations. Perfected my PowerPoint skills over the year with updates from Microsoft office.",
            icon: "file-powerpoint"
          },
          {
            title: "Outlook",
            img: "ppt.jpg",
            text:
              "Used on a daily-base while my apprenticeship and while working a Bank Vontobel. Furthermore, using the Calendar to coordinate meetings and send invitations as well as a folder system to keep track of my deadlines.",
            icon: "envelope"
          },
          {
            title: "Microsoft  Teams",
            img: "teams.jpg",
            text:
              "Professionally used as a communication tool as well as a document sharing platform within different Group projects collaborating with external companies during my studies.",
            icon: "user-friends"
          },
          {
            title: "Python",
            img: "python.jpg",
            text: "Udemy bootcamp (in progress)",
            icon: "brands/python"
          },
          {
            title: "Javascript",
            img: "js.jpg",
            text: "Udemy Bootcamp (in progress)",
            icon: "brands/js-square"
          },
          {
            title: "Avaloq",
            img: "avaloq.jpg",
            text:
              "Professionally used as a business process tool while working at Bank Vontobel.",
            icon: "at"
          },
          {
            title: "Sage Buchhaltung",
            img: "sage.jpg",
            text:
              "Professionally used to do the accounting for different clients while my Apprenticeship.",
            icon: "piggy-bank"
          },
          {
            title: "Google Drive",
            img: "word.jpg",
            text:
              "Regularly used as a File sharing platform in group works, especially while my Year abroad in Bordeaux.",
            icon: "brands/google-drive"
          }
        ]
      };
    }
  };
</script>

<style lang="sass" scoped>
  .content
    padding: 40px
    max-width: 1100px

  .split-container
    display: flex

  .split-left
    width: calc(100% * (3 / 5))

  .split-right
    width: calc(100% - (100% * (3 / 5)))

    padding-left: 20px
    p
      font-weight: 500
      line-height: 23px

  .gallery-container
    display: flex
    justify-content: space-between
    flex-wrap: wrap

  .gallery-item
    position: relative
    width: calc(100% / 5 - 10px)
    margin-bottom: 10px
    background-size: contain
    &:before
      content: ''
      padding-bottom: 100%
      display: block

  .gallery-item-image
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    position: absolute
    top: 0;
    filter: grayscale(100%)
    font-weight: 600
    height: 100%
    width: 100%
    background-size: cover
    padding: 10px
    cursor: pointer

    .fa-icon
      color: white
      width: 30px
      height: 30px
      margin-bottom: -5px

    .title
      font-size: 16px

    .hover-text
      display: none
      font-size: 12px

    &:hover
      .hover-text
        display: block
        font-weight: 500

      .title
        display: none

      i
        display: none

  .gallery-item-partial
    width: calc( 100% / 3 - 10px)
</style>
