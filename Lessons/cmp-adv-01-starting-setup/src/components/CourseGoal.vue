<template>
  <ul>
    <li v-for="goal in goals" :key="goal">{{ goal }}</li>
    <slot :item="goal" another-prop="[]"></slot>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish the course", "Learn Vue"],
    };
  },
};
</script>
