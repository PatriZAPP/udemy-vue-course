<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goal')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goal')">Manage Goals</button>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import ActiveGoal from "./components/ActiveGoal.vue";
import ManageGoal from "./components/ManageGoal.vue";

export default {
  components: {
    "the-header": TheHeader,
    "active-goal": ActiveGoal,
    "manage-goal": ManageGoal,
  },
  data() {
    return {
      selectedComponent: "active-goal",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
