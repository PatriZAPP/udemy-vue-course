<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="hidden">{{ goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import {ref} from 'vue'
// import {reactive} from 'vue'
import {reactive, toRefs} from 'vue'
export default {

  /* 4 --- Object API solution */
  // data() {
  //   return {
  //     goal: 'Hola',
  //     hidden: false, 
  //   },
  // },

  // methods: {
  //   hideGoal = () => {
  //       this.hidden = !this.hidden;
  //   }
  //   },
  

  setup(){


/*     1 -- Using only Refs solution */

    // const courseGoal = ref('Hola')
    // let hidden = ref(false);

    // const hideGoal = () => {
    //     hidden.value = !hidden.value;
    // }

    // return { courseGoal, toggleGoal: hideGoal, hidden: hidden  }

/*     2 -- Using only Reactive solution */

  //   const courseData = reactive({
  //     goal: 'Hola',
  //     hidden: false
  //   })

  //   const hideGoal = () => {
  //       courseData.hidden = !courseData.hidden;
  //   }

  //   return { courseData, toggleGoal: hideGoal }
  // }

/*     3 -- Using toRefs solution */
    const courseData = reactive({
      goal: 'Hola',
      hidden: false
    })

    const courseRefs = toRefs(courseData);

    const hideGoal = () => {
        courseData.hidden = !courseData.hidden;
    }

    return { courseData, toggleGoal: hideGoal, goal:courseRefs.goal, hidden: courseRefs.hidden }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>