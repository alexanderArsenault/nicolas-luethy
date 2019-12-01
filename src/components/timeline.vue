<template>
  <div class="timeline-container">
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
        <img :src="item.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "timeline",
    props: {
      timeline: {
        type: Array,
        default: () => [
          {
            header: "Professional Matura for Adults",
            body: "KV Zürich Business School",
            dates: "08/2014 – 07/2015",
            img: require("../assets/img/education/2.png")
          },
          {
            header: "Inseec School of Business and Economics, Bordeaux",
            body:
              "(Major International Business Management, With additional Courses in Wine and Spirits Management as well as International F&gt;inance and Accounting",
            dates: "08/2018 – 06/2019",
            img: require("../assets/img/education/inseec.png")
          },
          {
            header: "International Business Management BSc",
            body: "ZHAW School of Management and Law",
            dates: "08/17 - Today",
            img: require("../assets/img/education/3.png")
          }
        ]
      }
    }
  };
</script>
<style scoped>
  .timeline-item {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 100px;
  }

  .timeline-center {
    position: relative;
  }

  .timeline-center-dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
  }
  .timeline-item:not(:last-of-type) .timeline-center:before {
    position: absolute;
    content: "";
    height: 100px;
    top: calc(100% + 50px);
    left: 50%;
    transform: translateX(-50%);
    border-left: 1px solid white;
  }

  .timeline-item:nth-of-type(2n) {
    flex-direction: row-reverse;
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
  .timeline-image-container img {
    height: 60px;
  }
</style>
