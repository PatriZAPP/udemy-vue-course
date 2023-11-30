<template>
  <section class="container">
    <h2>{{ fullName }}</h2>
    <h3>{{ uAge }}</h3>
<button @click="setAge">Change Age</button>
<div>
  <input type="text" placeholder="First name" v-model="firstName">
  <input type="text" placeholder="Last name" v-model="lastName">
</div>
  </section>
</template>

<script>
import { ref, computed, watch  } from 'vue';

export default {
setup() {
  // const user = reactive({
  //   name: 'Maximilian',
  //   age: 31
  // })

  const firstName = ref('');
  const lastName = ref('');
  const uAge = ref(31);

  // const setFirstName = (event) => {
  //   firstName.value = event.target.value 
  // }
  // const setLastName = (event) => {
  //   lastName.value = event.target.value
  // }

const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value;
})

  watch([fullName, uAge], function (newValues, oldValues){
    console.log('Old age:' + oldValues[0]);
    console.log('New age:' + newValues[0]);
    console.log('Old name:' + oldValues[1]);
    console.log('New name:' + newValues[1]);

  })

  const setNewAge = () => {
    uAge.value = 32;
  }
  return { uAge, fullName, firstName, lastName, setAge: setNewAge };
}
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>