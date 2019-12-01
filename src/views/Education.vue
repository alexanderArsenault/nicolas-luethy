<template>
  <div class="timeline-container">
    <div
      class="timeline-item"
      v-for="(item, index) in timeline"
      :key="`timline-item-${index}`"
    >
      <div class="timeline-left-container">
        <div class="timeline-header">{{ item.header }}</div>
        <div class="timeline-body">{{ item.body }}</div>
        <div class="timeline-dates">
          {{ item.datestart }} - {{ item.dateend }}
        </div>
      </div>
      <div class="timeline-center"></div>
      <div class="timeline-right-container">
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
        type: Array
      }
    }
  };
</script>
