<template>
  <section class="container">
    <user-data :age = "uAge" :first-name="firstName" :last-name="lastName"></user-data>
<button @click="setAge">Change Age</button>
<div>
  <input type="text" placeholder="First name" v-model="firstName">
  <input type="text" placeholder="Last name" ref="lastNameInput">
  <button @click="setLastName">Set Last Name</button>
</div>
  </section>
</template>

<script>
import { ref, watch, provide, onBeforeMount  } from 'vue';
import UserData from './components/UserData.vue';

export default {
components: {UserData},

setup() {

  // const user = reactive({
  //   name: 'Maximilian',
  //   age: 31
  // })

  const firstName = ref('');
  const lastName = ref('');
  const uAge = ref(31);
  const lastNameInput = ref (null);

  // const setFirstName = (event) => {
  //   firstName.value = event.target.value 
  // }
  // const setLastName = (event) => {
  //   lastName.value = event.target.value
  // }

  watch([uAge], function (newValues, oldValues){
    console.log('Old age:' + oldValues[0]);
    console.log('New age:' + newValues[0]);
  })

  const setNewAge = () => {
    uAge.value = 32;
  }

  onBefoureMount(() => {
    console.log('onBeforeMount')
  })

  provide('userAge', uAge);

  const setLastName = () => {
  lastName.value = lastNameInput.value.value;
}
  return { firstName, lastName, setAge: setNewAge, setLastName, lastNameInput };
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