const app = Vue.createApp({
data () {
    return {
        courseGoalA: 'FInish the course and learn Vue!',
        courseGoalB: 'Master Vue and build amazong apps!',
        vueLink: 'https://vuejs.org/'
    };
},

methods: {
    outputGoal() {
        const randNumber = Math.random();
        if (randNumber < 0.5) { 
            return this.courseGoalA;
        } else {
            return this.courseGoalB;
        }
    }
}
})

app.mount('#user-goal');