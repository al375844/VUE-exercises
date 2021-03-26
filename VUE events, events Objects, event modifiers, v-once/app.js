const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    reset () {
      this.counter = 0;
    },
    substract (num) {
      this.counter = this.counter - num;
    },
    add (num) {
      this.counter = this.counter + num;
    },
    setName(event, secondName){ //Cuando se escucha un evento de tipo input, el navegador nos proporciona automáticamente un objeto(al que ahora llamamos event)
      this.name = event.target.value + ' ' + secondName;
    },
    submitForm(/*event*/) {
      //event.preventDefault(); Con event.preventDefault() evitamos que se actualice la página entera perdiendo nuestros datos
      //esto funciona perfectamente, pero en lugar de utilizarlo así vamos a utilizar modificadores de evento de Vue
      alert('Submitted!');
    },
    confirmedInput(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');