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
          <p class="hover-text mobile-hide">{{ skill.text }}</p>
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
              <p class="hover-text mobile-hide">{{ skill.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="split-right">
        <h1 class="header-text">
          More
        </h1>
        <p>
          My interests include music, sport (football, exploring new
          technologies and organising Music and wine events. I'm a part of a
          collective which organizes concerts and parties in different venues
          around Zurich. While studying in Bordeaux, I was a part of the Vinseec
          Wine Association which helped me discover my new hobby, organizing
          tasting events around Zurich.
        </p>
        <h3>
          German
        </h3>
        <ul>
          <li>Native Language</li>
        </ul>
        <h3>English</h3>
        <ul>
          <li>Toefl 105/120</li>
          <li>Full Bachelor program in English</li>
        </ul>
        <h3>French</h3>
        <ul>
          <li>Year abroad in Bordeaux, with several courses in French.</li>
          <li>Professional Skills, perfectly able to hold conversations.</li>
          <li>Diplôme de français professionnel B2 (DFP)</li>
        </ul>
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
            icon: "users",
            text:
              "Gained and proved valuable Team experience while working in different Teams in my apprenticeship as well working for Bank Vontobel and working on several group projects during my current studies.Gained and proved valuable team experience while working in different team’s in my previous work experiences as well as working on group projects during my studies."
          },
          {
            title: "Goal oriented",
            icon: "bullseye",
            text: "Always aiming for the most suitable outcome."
          },
          {
            title: "Problem solving",
            text:
              "Interacted as a mediator while facing group difficulties during business projects as well as during organization of events and concerts in my private life.",
            icon: "handshake"
          },
          {
            title: "Interested",
            text:
              "Always informed about current world news and politics. Aware about newest trends within the Music scene. Keen on learning new skills to improve and facilitate my private or professional life.",
            icon: "map-marker"
          },
          {
            title: "Adaptable",
            text:
              "Adaptable to changes and always happy to receive feedback and external inputs to improve my work.",
            icon: "exchange-alt"
          },
          {
            title: "Leadership",
            icon: "book-reader",
            text:
              "Helped organize a Wine Expo with over 500 Participants during my year abroad and helped organize concerts and small festival within Zurich’s electronic Music scene."
          }
        ],
        skills: [
          {
            title: "Word",
            text:
              "Advanced knowledge by using it in all my papers since high school.",
            icon: "file-word",
            img: "word.jpg"
          },
          {
            title: "Excel",
            text:
              "Using complex formulas that have been applied in scoring models and data analysis while working at Bank Vontobel as well as in projects during my studies.",
            icon: "file-excel",
            img: "excel.jpg"
          },
          {
            title: "PowerPoint",
            img: "ppt.jpg",
            text:
              "Professionally used for presentations at university as well as at work.",
            icon: "file-powerpoint"
          },
          {
            title: "Outlook",
            img: "ppt.jpg",
            text:
              "Used on a daily-base while working at Bank Vontobel. Moreover, the calendar was used to coordinate meetings and send invitations as well as a come up with folder systems to keep track of my deadlines.",
            icon: "envelope"
          },
          {
            title: "Microsoft  Teams",
            img: "teams.jpg",
            text:
              "Professionally used as a communication tool and as a document sharing platform throughout different Group projects collaborating with external companies during while studying.",
            icon: "user-friends"
          },
          {
            title: "Python",
            img: "python.jpg",
            text: "Udemy bootcamp",
            icon: "brands/python"
          },
          {
            title: "Javascript",
            img: "js.jpg",
            text: "Udemy Bootcamp",
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
              "Professionally used to do the accounting for different clients while my apprenticeship.",
            icon: "piggy-bank"
          },
          {
            title: "Google Drive",
            img: "word.jpg",
            text:
              "Regularly used as a file sharing platform in group projects, especially while my year abroad in Bordeaux.",
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
    @media (max-width: 700px)
      padding: 15px

  .split-container
    display: flex
    @media (max-width: 700px)
      flex-direction: column

  .split-left
    width: calc(100% * (3 / 5))
    @media (max-width: 700px)
      width: 100%

  .split-right
    width: calc(100% - (100% * (3 / 5)))
    @media (max-width: 700px)
      width: 100%

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
    @media (max-width: 700px)
      width: calc(100% / 3 - 10px)

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
      text-align: center
      @media (max-width: 700px)
        font-size: 12px

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
