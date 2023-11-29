/* ------------------VUE method------------------ */

Vue.createApp({

    /* dates given to vue */
    data() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    /* functions and methods to execute */
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
        }
    }
    /* tell which part of HTML is managed by VUE (the div with the id app) */
}).mount('#app');




/* ------------------JAVASCRIPT method------------------ */

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal () {
//     const enteredValue = inputEl.value;

//    /*  Create li element with DOM */
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);

//     /* Reset value to blank after write a Goal */
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);