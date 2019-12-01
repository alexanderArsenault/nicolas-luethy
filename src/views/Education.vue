<template>
  <div class="content">
    <h1 class="header-text">Education</h1>
    <div
      class="timeline-item"
      v-for="(item, index) in timeline"
      :key="`timline-item-${index}`"
    >
      <div class="timeline-text-container">
        <div class="timeline-header">{{ item.header }}</div>
        <div class="timeline-body">{{ item.body }}</div>
        <div class="timeline-dates">
          {{ item.dates }}
        </div>
      </div>
      <div class="timeline-center">
        <div class="timeline-center-dot"></div>
      </div>
      <div class="timeline-image-container">
        <div
          class="timeline-image"
          :style="
            `background-image: url(${require('../assets/img/education/' +
              item.img)})`
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "education",
    data() {
      return {
        timeline: [
          {
            header: "Professional Matura for Adults",
            body: "KV Zürich Business School",
            dates: "08/2014 – 07/2015",
            img: "2.png"
          },
          {
            header: "Inseec School of Business and Economics, Bordeaux",
            body:
              "(Major International Business Management, With additional Courses in Wine and Spirits Management as well as International Finance and Accounting",
            dates: "08/2018 – 06/2019",
            img: "inseec.png"
          },
          {
            header: "International Business Management BSc",
            body: "ZHAW School of Management and Law",
            dates: "08/17 - Today",
            img: "3.png"
          }
        ]
      };
    }
  };
</script>
<style scoped>
  .content {
    padding: 40px;
    max-width: 1100px;
  }

  .timeline-item {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    text-align: right;
  }
  .timeline-item:nth-of-type(2n) {
    flex-direction: row-reverse;
    text-align: left;
  }

  .timeline-center {
    position: relative;
    padding: 0 60px;
  }

  .timeline-center-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #1db954;
  }
  .timeline-item:not(:last-of-type) .timeline-center:before {
    position: absolute;
    content: "";
    height: 100px;
    top: calc(100% + 50px);
    left: 50%;
    transform: translateX(-50%);
    border-left: 1px solid #1db954;
  }

  .timeline-header {
    font-size: 18px;
    margin-bottom: 20px;
  }
  .timeline-body {
    font-size: 12px;
    padding-bottom: 10px;
  }
  .timeline-text-container {
    width: 33%;
  }
  .timeline-image-container {
    width: 33%;
    background-color: #fff;
    padding: 20px;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .timeline-image {
    width: 100%;
    height: 60px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
