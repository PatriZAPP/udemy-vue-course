const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },

  methods: {
    add(n) {
      this.counter = this.counter + n;
    },

    reduce(n) {
      this.counter = this.counter - n;
    },

    setName(lastName) {
      this.name = event.target.value + ' ' + lastName; 
    }
  }
});

app.mount('#events');
